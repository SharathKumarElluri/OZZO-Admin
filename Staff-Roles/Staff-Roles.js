/* =========================================================
   OZZO ADMIN
   STAFF & ROLES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const sidebar =
        document.getElementById("adminSidebar");

    const overlay =
        document.getElementById("adminOverlay");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNotificationBtn =
        document.getElementById("mobileNotificationBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const closeNotifications =
        document.getElementById("closeNotifications");

    const adminSearch =
        document.getElementById("adminSearch");

    const staffSearch =
        document.getElementById("staffSearch");

    const roleFilter =
        document.getElementById("roleFilter");

    const statusFilter =
        document.getElementById("statusFilter");

    const staffTableBody =
        document.getElementById("staffTableBody");

    const staffCount =
        document.getElementById("staffCount");

    const clearFiltersBtn =
        document.getElementById("clearFiltersBtn");

    const addStaffBtn =
        document.getElementById("addStaffBtn");

    const manageRolesBtn =
        document.getElementById("manageRolesBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const currentDate =
        document.getElementById("currentDate");

    const staffModalElement =
        document.getElementById("staffModal");

    const staffForm =
        document.getElementById("staffForm");

    const staffModalTitle =
        document.getElementById("staffModalTitle");

    const saveStaffBtn =
        document.getElementById("saveStaffBtn");


    let staffModal = null;

    if (staffModalElement) {

        staffModal =
            new bootstrap.Modal(
                staffModalElement
            );

    }


    let editingId = null;


    /* =====================================================
       STAFF DATA
    ===================================================== */

    const staffData = [

        {
            id:1,
            name:"Anjali Rao",
            email:"anjali@ozzo.com",
            role:"super-admin",
            department:"Administration",
            status:"active",
            lastLogin:"Today, 10:42 AM"
        },

        {
            id:2,
            name:"Rahul Mehta",
            email:"rahul@ozzo.com",
            role:"admin",
            department:"Operations",
            status:"active",
            lastLogin:"Today, 09:18 AM"
        },

        {
            id:3,
            name:"Priya Sharma",
            email:"priya@ozzo.com",
            role:"manager",
            department:"Sales",
            status:"active",
            lastLogin:"Today, 08:56 AM"
        },

        {
            id:4,
            name:"Vikram Singh",
            email:"vikram@ozzo.com",
            role:"support",
            department:"Customer Care",
            status:"active",
            lastLogin:"Yesterday, 06:34 PM"
        },

        {
            id:5,
            name:"Sneha Patel",
            email:"sneha@ozzo.com",
            role:"operations",
            department:"Logistics",
            status:"pending",
            lastLogin:"Never"
        },

        {
            id:6,
            name:"Arjun Kumar",
            email:"arjun@ozzo.com",
            role:"manager",
            department:"Marketing",
            status:"active",
            lastLogin:"Yesterday, 04:18 PM"
        },

        {
            id:7,
            name:"Neha Reddy",
            email:"neha@ozzo.com",
            role:"support",
            department:"Customer Care",
            status:"inactive",
            lastLogin:"Aug 28, 2026"
        }

    ];


    /* =====================================================
       DATE
    ===================================================== */

    if (currentDate) {

        const now =
            new Date();

        currentDate.textContent =
            now.toLocaleDateString(
                "en-IN",
                {
                    month:"long",
                    year:"numeric"
                }
            );

    }


    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    function openSidebar() {

        if (!sidebar || !overlay) {
            return;
        }

        sidebar.classList.add("open");

        overlay.classList.add("show");

    }


    function closeSidebar() {

        if (!sidebar || !overlay) {
            return;
        }

        sidebar.classList.remove("open");

        overlay.classList.remove("show");

    }


    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener(
            "click",
            openSidebar
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    document
        .querySelectorAll(".admin-nav-link")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 991.98
                    ) {

                        closeSidebar();

                    }

                }
            );

        });


    /* =====================================================
       NOTIFICATIONS
    ===================================================== */

    function toggleNotifications() {

        if (!notificationPanel) {
            return;
        }

        notificationPanel.classList.toggle(
            "show"
        );

    }


    function hideNotifications() {

        if (!notificationPanel) {
            return;
        }

        notificationPanel.classList.remove(
            "show"
        );

    }


    if (notificationBtn) {

        notificationBtn.addEventListener(
            "click",
            toggleNotifications
        );

    }


    if (mobileNotificationBtn) {

        mobileNotificationBtn.addEventListener(
            "click",
            toggleNotifications
        );

    }


    if (closeNotifications) {

        closeNotifications.addEventListener(
            "click",
            hideNotifications
        );

    }


    document.addEventListener(
        "click",
        function (event) {

            if (!notificationPanel) {
                return;
            }

            const insidePanel =
                notificationPanel.contains(
                    event.target
                );

            const desktopButton =
                notificationBtn &&
                notificationBtn.contains(
                    event.target
                );

            const mobileButton =
                mobileNotificationBtn &&
                mobileNotificationBtn.contains(
                    event.target
                );

            if (
                !insidePanel &&
                !desktopButton &&
                !mobileButton
            ) {

                hideNotifications();

            }

        }
    );


    /* =====================================================
       STAFF FILTERS
    ===================================================== */

    function applyFilters() {

        if (!staffTableBody) {
            return;
        }


        const searchValue =
            staffSearch
                ? staffSearch.value
                    .trim()
                    .toLowerCase()
                : "";


        const selectedRole =
            roleFilter
                ? roleFilter.value
                : "all";


        const selectedStatus =
            statusFilter
                ? statusFilter.value
                : "all";


        const rows =
            staffTableBody.querySelectorAll(
                "tr"
            );


        let visibleCount = 0;


        rows.forEach(function (row) {

            const name =
                (row.dataset.name || "")
                    .toLowerCase();

            const role =
                row.dataset.role || "";

            const status =
                row.dataset.status || "";

            const fullText =
                row.textContent.toLowerCase();


            const matchesSearch =
                !searchValue ||
                name.includes(searchValue) ||
                fullText.includes(searchValue);


            const matchesRole =
                selectedRole === "all" ||
                role === selectedRole;


            const matchesStatus =
                selectedStatus === "all" ||
                status === selectedStatus;


            if (
                matchesSearch &&
                matchesRole &&
                matchesStatus
            ) {

                row.style.display = "";

                visibleCount++;

            } else {

                row.style.display = "none";

            }

        });


        if (staffCount) {

            staffCount.textContent =
                `Showing ${visibleCount} staff members`;

        }

    }


    if (staffSearch) {

        staffSearch.addEventListener(
            "input",
            applyFilters
        );

    }


    if (roleFilter) {

        roleFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (statusFilter) {

        statusFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    if (clearFiltersBtn) {

        clearFiltersBtn.addEventListener(
            "click",
            function () {

                if (staffSearch) {
                    staffSearch.value = "";
                }

                if (roleFilter) {
                    roleFilter.value = "all";
                }

                if (statusFilter) {
                    statusFilter.value = "all";
                }

                applyFilters();

                showToast(
                    "Filters Cleared",
                    "All staff filters have been reset."
                );

            }
        );

    }


    /* =====================================================
       TOP SEARCH
    ===================================================== */

    if (adminSearch) {

        adminSearch.addEventListener(
            "input",
            function () {

                const value =
                    adminSearch.value
                        .trim()
                        .toLowerCase();


                if (!value) {
                    return;
                }


                const matches =
                    staffData.filter(
                        function (staff) {

                            const searchable =
                                `${staff.name} ${staff.email} ${staff.role} ${staff.department}`
                                    .toLowerCase();

                            return searchable.includes(
                                value
                            );

                        }
                    );


                showToast(
                    "Search",
                    `${matches.length} staff record(s) found.`
                );

            }
        );

    }


    /* =====================================================
       MODAL RESET
    ===================================================== */

    function resetForm() {

        if (staffForm) {
            staffForm.reset();
        }

        editingId = null;


        if (staffModalTitle) {

            staffModalTitle.textContent =
                "Add Staff Member";

        }


        if (saveStaffBtn) {

            saveStaffBtn.textContent =
                "Save Staff";

        }

    }


    /* =====================================================
       ADD STAFF
    ===================================================== */

    if (addStaffBtn) {

        addStaffBtn.addEventListener(
            "click",
            function () {

                resetForm();

                if (staffModal) {
                    staffModal.show();
                }

            }
        );

    }


    /* =====================================================
       EDIT STAFF
    ===================================================== */

    function editStaff(id) {

        const staff =
            staffData.find(
                function (item) {

                    return item.id === id;

                }
            );


        if (!staff) {
            return;
        }


        editingId = id;


        const nameInput =
            document.getElementById(
                "staffName"
            );

        const emailInput =
            document.getElementById(
                "staffEmail"
            );

        const roleInput =
            document.getElementById(
                "staffRole"
            );

        const statusInput =
            document.getElementById(
                "staffStatus"
            );

        const departmentInput =
            document.getElementById(
                "staffDepartment"
            );


        if (nameInput) {
            nameInput.value =
                staff.name;
        }


        if (emailInput) {
            emailInput.value =
                staff.email;
        }


        if (roleInput) {
            roleInput.value =
                staff.role;
        }


        if (statusInput) {
            statusInput.value =
                staff.status;
        }


        if (departmentInput) {
            departmentInput.value =
                staff.department;
        }


        if (staffModalTitle) {

            staffModalTitle.textContent =
                "Edit Staff Member";

        }


        if (saveStaffBtn) {

            saveStaffBtn.textContent =
                "Update Staff";

        }


        if (staffModal) {
            staffModal.show();
        }

    }


    document
        .querySelectorAll(".edit-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    editStaff(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    /* =====================================================
       SAVE STAFF
    ===================================================== */

    if (staffForm) {

        staffForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    document.getElementById(
                        "staffName"
                    );

                const emailInput =
                    document.getElementById(
                        "staffEmail"
                    );

                const roleInput =
                    document.getElementById(
                        "staffRole"
                    );

                const statusInput =
                    document.getElementById(
                        "staffStatus"
                    );

                const departmentInput =
                    document.getElementById(
                        "staffDepartment"
                    );


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";


                const email =
                    emailInput
                        ? emailInput.value.trim()
                        : "";


                const role =
                    roleInput
                        ? roleInput.value
                        : "";


                const status =
                    statusInput
                        ? statusInput.value
                        : "active";


                const department =
                    departmentInput
                        ? departmentInput.value.trim()
                        : "";


                if (
                    !name ||
                    !email ||
                    !role ||
                    !department
                ) {

                    showToast(
                        "Incomplete Form",
                        "Please fill in all required fields."
                    );

                    return;

                }


                /* =================================================
                   EDIT EXISTING
                ================================================= */

                if (editingId !== null) {

                    const staff =
                        staffData.find(
                            function (item) {

                                return item.id === editingId;

                            }
                        );


                    if (staff) {

                        staff.name =
                            name;

                        staff.email =
                            email;

                        staff.role =
                            role;

                        staff.status =
                            status;

                        staff.department =
                            department;

                    }


                    const row =
                        staffTableBody
                            ? staffTableBody.querySelector(
                                `tr[data-id="${editingId}"]`
                            )
                            : null;


                    if (row) {

                        row.dataset.name =
                            name;

                        row.dataset.role =
                            role;

                        row.dataset.status =
                            status;


                        const personName =
                            row.querySelector(
                                ".staff-person strong"
                            );

                        const personEmail =
                            row.querySelector(
                                ".staff-person small"
                            );

                        const departmentCell =
                            row.cells[2];

                        const statusBadge =
                            row.querySelector(
                                ".status-badge"
                            );


                        if (personName) {
                            personName.textContent =
                                name;
                        }


                        if (personEmail) {
                            personEmail.textContent =
                                email;
                        }


                        if (departmentCell) {
                            departmentCell.textContent =
                                department;
                        }


                        if (statusBadge) {

                            statusBadge.className =
                                "status-badge " +
                                status;

                            statusBadge.textContent =
                                capitalize(
                                    status
                                );

                        }

                    }


                    showToast(
                        "Staff Updated",
                        `${name}'s details were updated.`
                    );

                }


                /* =================================================
                   ADD NEW
                ================================================= */

                else {

                    const nextId =
                        staffData.length
                            ? Math.max(
                                ...staffData.map(
                                    function (item) {
                                        return item.id;
                                    }
                                )
                            ) + 1
                            : 1;


                    staffData.push({

                        id:nextId,

                        name:name,

                        email:email,

                        role:role,

                        department:department,

                        status:status,

                        lastLogin:
                            status === "pending"
                                ? "Never"
                                : "Just now"

                    });


                    showToast(
                        "Staff Added",
                        `${name} was added to the team.`
                    );

                }


                if (staffModal) {
                    staffModal.hide();
                }


                resetForm();

                applyFilters();

            }
        );

    }


    /* =====================================================
       MANAGE ROLES
    ===================================================== */

    if (manageRolesBtn) {

        manageRolesBtn.addEventListener(
            "click",
            function () {

                showToast(
                    "Roles",
                    "Role permission management opened."
                );

            }
        );

    }


    /* =====================================================
       LOGOUT
    ===================================================== */

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                const confirmed =
                    window.confirm(
                        "Are you sure you want to logout?"
                    );


                if (confirmed) {

                    showToast(
                        "Logout",
                        "Logout action has been triggered."
                    );

                }

            }
        );

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function capitalize(value) {

        if (!value) {
            return "";
        }

        return (
            value.charAt(0).toUpperCase() +
            value.slice(1)
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(
        title,
        message
    ) {

        const toast =
            document.getElementById(
                "ozzoToast"
            );


        if (!toast) {
            return;
        }


        const titleElement =
            toast.querySelector(
                "strong"
            );

        const messageElement =
            toast.querySelector(
                "span"
            );


        if (titleElement) {

            titleElement.textContent =
                title;

        }


        if (messageElement) {

            messageElement.textContent =
                message;

        }


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toast._timer
        );


        toast._timer =
            setTimeout(
                function () {

                    toast.classList.remove(
                        "show"
                    );

                },
                3000
            );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    applyFilters();

});