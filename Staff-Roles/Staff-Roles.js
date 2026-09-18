document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       STAFF DATA
    ========================================================= */

    const staffData = [

        {
            name: "Anjali Rao",
            email: "anjali.rao@ozzo.com",
            initials: "AR",
            role: "Super Admin",
            department: "Management",
            status: "Active",
            lastActive: "Today 10:42 AM"
        },

        {
            name: "Rahul Mehta",
            email: "rahul.mehta@ozzo.com",
            initials: "RM",
            role: "Admin",
            department: "Operations",
            status: "Active",
            lastActive: "Today 9:58 AM"
        },

        {
            name: "Priya Sharma",
            email: "priya.sharma@ozzo.com",
            initials: "PS",
            role: "Manager",
            department: "Sales",
            status: "Active",
            lastActive: "Today 9:31 AM"
        },

        {
            name: "Vikram Singh",
            email: "vikram.singh@ozzo.com",
            initials: "VS",
            role: "Support",
            department: "Customer Support",
            status: "Active",
            lastActive: "Today 8:47 AM"
        },

        {
            name: "Sneha Patel",
            email: "sneha.patel@ozzo.com",
            initials: "SP",
            role: "Operations",
            department: "Inventory",
            status: "Active",
            lastActive: "Yesterday 6:14 PM"
        },

        {
            name: "Arjun Kumar",
            email: "arjun.kumar@ozzo.com",
            initials: "AK",
            role: "Admin",
            department: "Catalog",
            status: "Inactive",
            lastActive: "15 Sep 7:26 PM"
        },

        {
            name: "Neha Reddy",
            email: "neha.reddy@ozzo.com",
            initials: "NR",
            role: "Manager",
            department: "Marketing",
            status: "Pending",
            lastActive: "Invitation sent 16 Sep"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const sidebar =
        document.getElementById("adminSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNotificationBtn =
        document.getElementById("mobileNotificationBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const adminToast =
        document.getElementById("adminToast");

    const staffSearch =
        document.getElementById("staffSearch");

    const topSearch =
        document.getElementById("topSearch");

    const roleFilter =
        document.getElementById("roleFilter");

    const statusFilter =
        document.getElementById("statusFilter");

    const resultCount =
        document.getElementById("resultCount");

    const staffModal =
        document.getElementById("staffModal");

    const addStaffModal =
        document.getElementById("addStaffModal");

    const addStaffBtn =
        document.getElementById("addStaffBtn");

    const manageRolesBtn =
        document.getElementById("manageRolesBtn");

    const auditLogsBtn =
        document.getElementById("auditLogsBtn");

    const closeStaffModal =
        document.getElementById("closeStaffModal");

    const cancelModalBtn =
        document.getElementById("cancelModalBtn");

    const closeAddStaffModal =
        document.getElementById("closeAddStaffModal");

    const cancelAddStaff =
        document.getElementById("cancelAddStaff");

    const editStaffBtn =
        document.getElementById("editStaffBtn");

    const addStaffForm =
        document.getElementById("addStaffForm");


    /* =========================================================
       TOAST
    ========================================================= */

    let toastTimer = null;


    function showToast(message) {

        if (!adminToast) return;

        adminToast.textContent = message;

        adminToast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {

            adminToast.classList.remove("show");

        }, 2400);

    }


    /* =========================================================
       MOBILE SIDEBAR
    ========================================================= */

    function openSidebar() {

        sidebar?.classList.add("show");

        overlay?.classList.add("show");

        document.body.style.overflow = "hidden";

    }


    function closeSidebar() {

        sidebar?.classList.remove("show");

        overlay?.classList.remove("show");

        document.body.style.overflow = "";

    }


    mobileMenuBtn?.addEventListener(
        "click",
        openSidebar
    );


    overlay?.addEventListener(
        "click",
        closeSidebar
    );


    /* =========================================================
       NOTIFICATIONS
    ========================================================= */

    function toggleNotifications() {

        notificationPanel?.classList.toggle("show");

    }


    notificationBtn?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleNotifications();

        }
    );


    mobileNotificationBtn?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            toggleNotifications();

        }
    );


    document.addEventListener(
        "click",
        (event) => {

            if (
                notificationPanel &&
                !notificationPanel.contains(event.target) &&
                event.target !== notificationBtn &&
                event.target !== mobileNotificationBtn
            ) {

                notificationPanel.classList.remove("show");

            }

        }
    );


    /* =========================================================
       LOGOUT
    ========================================================= */

    logoutBtn?.addEventListener(
        "click",
        () => {

            showToast(
                "Logout action triggered."
            );

        }
    );


    /* =========================================================
       TABLE FILTER
    ========================================================= */

    const rows =
        Array.from(
            document.querySelectorAll(
                "#staffTable tbody tr"
            )
        );


    function filterStaff() {

        const searchValue =
            (staffSearch?.value || "")
                .trim()
                .toLowerCase();

        const topSearchValue =
            (topSearch?.value || "")
                .trim()
                .toLowerCase();

        const searchText =
            searchValue || topSearchValue;

        const selectedRole =
            roleFilter?.value || "all";

        const selectedStatus =
            statusFilter?.value || "all";

        let visibleCount = 0;


        rows.forEach((row) => {

            const name =
                (row.dataset.name || "")
                    .toLowerCase();

            const role =
                row.dataset.role || "";

            const status =
                row.dataset.status || "";


            const matchesSearch =
                !searchText ||
                name.includes(searchText) ||
                role.toLowerCase().includes(searchText) ||
                status.toLowerCase().includes(searchText);


            const matchesRole =
                selectedRole === "all" ||
                role === selectedRole;


            const matchesStatus =
                selectedStatus === "all" ||
                status === selectedStatus;


            const visible =
                matchesSearch &&
                matchesRole &&
                matchesStatus;


            row.classList.toggle(
                "staff-row-hidden",
                !visible
            );


            if (visible) {
                visibleCount++;
            }

        });


        if (resultCount) {

            resultCount.textContent =
                `Showing ${visibleCount} of 24 staff members`;

        }

    }


    staffSearch?.addEventListener(
        "input",
        filterStaff
    );


    topSearch?.addEventListener(
        "input",
        filterStaff
    );


    roleFilter?.addEventListener(
        "change",
        filterStaff
    );


    statusFilter?.addEventListener(
        "change",
        filterStaff
    );


    /* =========================================================
       STAFF MODAL
    ========================================================= */

    const modalAvatar =
        document.getElementById("modalAvatar");

    const modalName =
        document.getElementById("modalName");

    const modalEmail =
        document.getElementById("modalEmail");

    const modalRole =
        document.getElementById("modalRole");

    const modalDepartment =
        document.getElementById("modalDepartment");

    const modalStatus =
        document.getElementById("modalStatus");

    const modalLastActive =
        document.getElementById("modalLastActive");


    function openStaffModal(index) {

        const staff =
            staffData[index];

        if (!staff) return;


        if (modalAvatar) {

            modalAvatar.textContent =
                staff.initials;

        }


        if (modalName) {

            modalName.textContent =
                staff.name;

        }


        if (modalEmail) {

            modalEmail.textContent =
                staff.email;

        }


        if (modalRole) {

            modalRole.textContent =
                staff.role;

        }


        if (modalDepartment) {

            modalDepartment.textContent =
                staff.department;

        }


        if (modalStatus) {

            modalStatus.textContent =
                staff.status;

        }


        if (modalLastActive) {

            modalLastActive.textContent =
                staff.lastActive;

        }


        staffModal?.classList.add("show");

        staffModal?.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function closeStaffProfileModal() {

        staffModal?.classList.remove("show");

        staffModal?.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    document.querySelectorAll(
        ".view-staff"
    ).forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const index =
                    Number(button.dataset.index);

                openStaffModal(index);

            }
        );

    });


    closeStaffModal?.addEventListener(
        "click",
        closeStaffProfileModal
    );


    cancelModalBtn?.addEventListener(
        "click",
        closeStaffProfileModal
    );


    staffModal?.querySelector(
        ".staff-modal-backdrop"
    )?.addEventListener(
        "click",
        closeStaffProfileModal
    );


    /* =========================================================
       EDIT STAFF
    ========================================================= */

    editStaffBtn?.addEventListener(
        "click",
        () => {

            closeStaffProfileModal();

            showToast(
                "Staff edit action opened."
            );

        }
    );


    /* =========================================================
       ADD STAFF MODAL
    ========================================================= */

    function openAddStaffModal() {

        addStaffModal?.classList.add("show");

        addStaffModal?.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    }


    function closeAddStaffModalFn() {

        addStaffModal?.classList.remove("show");

        addStaffModal?.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow = "";

    }


    addStaffBtn?.addEventListener(
        "click",
        openAddStaffModal
    );


    closeAddStaffModal?.addEventListener(
        "click",
        closeAddStaffModalFn
    );


    cancelAddStaff?.addEventListener(
        "click",
        closeAddStaffModalFn
    );


    addStaffModal?.querySelector(
        ".staff-modal-backdrop"
    )?.addEventListener(
        "click",
        closeAddStaffModalFn
    );


    /* =========================================================
       ADD STAFF FORM
    ========================================================= */

    addStaffForm?.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            const name =
                document.getElementById(
                    "staffName"
                )?.value.trim();

            const email =
                document.getElementById(
                    "staffEmail"
                )?.value.trim();

            if (!name || !email) {

                showToast(
                    "Please complete the staff details."
                );

                return;

            }


            addStaffForm.reset();

            closeAddStaffModalFn();

            showToast(
                `Invitation sent to ${name}.`
            );

        }
    );


    /* =========================================================
       MANAGE ROLES
    ========================================================= */

    manageRolesBtn?.addEventListener(
        "click",
        () => {

            showToast(
                "Role management opened."
            );

        }
    );


    /* =========================================================
       AUDIT LOGS
    ========================================================= */

    auditLogsBtn?.addEventListener(
        "click",
        () => {

            window.location.href =
                "../Audit_logs/Audit_logs.html";

        }
    );


    /* =========================================================
       PAGINATION DEMO
    ========================================================= */

    document.querySelectorAll(
        ".page-btn"
    ).forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                if (
                    button.classList.contains(
                        "disabled"
                    ) ||
                    button.classList.contains(
                        "current"
                    )
                ) {
                    return;
                }


                document.querySelectorAll(
                    ".page-btn"
                ).forEach((item) => {

                    item.classList.remove(
                        "current"
                    );

                });


                button.classList.add(
                    "current"
                );


                showToast(
                    `Page ${button.textContent.trim()} selected.`
                );

            }
        );

    });


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key !== "Escape") {
                return;
            }


            closeSidebar();


            notificationPanel?.classList.remove(
                "show"
            );


            closeStaffProfileModal();

            closeAddStaffModalFn();

        }
    );


    /* =========================================================
       NAVIGATION ON MOBILE
    ========================================================= */

    document.querySelectorAll(
        ".admin-nav-link[href]"
    ).forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                if (
                    window.innerWidth <= 991 &&
                    link.tagName.toLowerCase() === "a"
                ) {

                    closeSidebar();

                }

            }
        );

    });


});