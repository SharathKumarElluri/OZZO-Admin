/* =========================================================
   OZZO ADMIN
   AUDIT LOGS
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

    const auditSearch =
        document.getElementById("auditSearch");

    const actionFilter =
        document.getElementById("actionFilter");

    const moduleFilter =
        document.getElementById("moduleFilter");

    const severityFilter =
        document.getElementById("severityFilter");

    const auditTableBody =
        document.getElementById("auditTableBody");

    const auditCount =
        document.getElementById("auditCount");

    const exportAuditBtn =
        document.getElementById("exportAuditBtn");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const auditModalElement =
        document.getElementById("auditModal");


    let auditModal = null;


    if (auditModalElement) {

        auditModal =
            new bootstrap.Modal(
                auditModalElement
            );

    }


    /* =====================================================
       DATE
    ===================================================== */

    const currentDate =
        document.getElementById("currentDate");


    if (currentDate) {

        const today =
            new Date();

        currentDate.textContent =
            today.toLocaleDateString(
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

            const panelClicked =
                notificationPanel.contains(
                    event.target
                );

            const desktopClicked =
                notificationBtn &&
                notificationBtn.contains(
                    event.target
                );

            const mobileClicked =
                mobileNotificationBtn &&
                mobileNotificationBtn.contains(
                    event.target
                );


            if (
                !panelClicked &&
                !desktopClicked &&
                !mobileClicked
            ) {

                hideNotifications();

            }

        }
    );


    /* =====================================================
       FILTER FUNCTION
    ===================================================== */

    function applyFilters() {

        if (!auditTableBody) {
            return;
        }


        const search =
            auditSearch
                ? auditSearch.value
                    .trim()
                    .toLowerCase()
                : "";


        const selectedAction =
            actionFilter
                ? actionFilter.value
                : "all";


        const selectedModule =
            moduleFilter
                ? moduleFilter.value
                : "all";


        const selectedSeverity =
            severityFilter
                ? severityFilter.value
                : "all";


        const rows =
            auditTableBody.querySelectorAll(
                "tr"
            );


        let visibleRows = 0;


        rows.forEach(function (row) {


            const rowText =
                row.textContent
                    .toLowerCase();


            const rowAction =
                row.dataset.action || "";


            const rowModule =
                row.dataset.module || "";


            const rowSeverity =
                row.dataset.severity || "";


            const matchesSearch =
                !search ||
                rowText.includes(search);


            const matchesAction =
                selectedAction === "all" ||
                rowAction === selectedAction;


            const matchesModule =
                selectedModule === "all" ||
                rowModule === selectedModule;


            const matchesSeverity =
                selectedSeverity === "all" ||
                rowSeverity === selectedSeverity;


            if (
                matchesSearch &&
                matchesAction &&
                matchesModule &&
                matchesSeverity
            ) {

                row.style.display = "";

                visibleRows++;

            }
            else {

                row.style.display = "none";

            }

        });


        if (auditCount) {

            auditCount.textContent =
                `Showing ${visibleRows} activity records`;

        }

    }


    if (auditSearch) {

        auditSearch.addEventListener(
            "input",
            applyFilters
        );

    }


    if (actionFilter) {

        actionFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (moduleFilter) {

        moduleFilter.addEventListener(
            "change",
            applyFilters
        );

    }


    if (severityFilter) {

        severityFilter.addEventListener(
            "change",
            applyFilters
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


                const rows =
                    auditTableBody
                        ? auditTableBody.querySelectorAll("tr")
                        : [];


                let matches = 0;


                rows.forEach(function (row) {

                    if (
                        row.textContent
                            .toLowerCase()
                            .includes(value)
                    ) {

                        matches++;

                    }

                });


                showToast(
                    "Audit Search",
                    `${matches} matching record(s) found.`
                );

            }
        );

    }


    /* =====================================================
       AUDIT DETAILS
    ===================================================== */

    const auditDetails = {

        1:{
            activity:"Product updated",
            user:"Anjali Rao",
            module:"Products",
            severity:"Success",
            ip:"103.24.18.72",
            time:"15 Sep 2026, 10:42 AM"
        },

        2:{
            activity:"Admin login",
            user:"Rahul Mehta",
            module:"Staff",
            severity:"Info",
            ip:"49.207.86.11",
            time:"15 Sep 2026, 09:18 AM"
        },

        3:{
            activity:"Order created",
            user:"Priya Sharma",
            module:"Orders",
            severity:"Success",
            ip:"117.201.34.92",
            time:"15 Sep 2026, 08:56 AM"
        },

        4:{
            activity:"Inventory record removed",
            user:"Arjun Kumar",
            module:"Inventory",
            severity:"Warning",
            ip:"182.74.20.61",
            time:"15 Sep 2026, 08:21 AM"
        },

        5:{
            activity:"Permission changed",
            user:"Admin",
            module:"Settings",
            severity:"Critical",
            ip:"10.28.41.7",
            time:"14 Sep 2026, 06:42 PM"
        },

        6:{
            activity:"Sales report exported",
            user:"Priya Sharma",
            module:"Reports",
            severity:"Info",
            ip:"117.201.34.92",
            time:"14 Sep 2026, 04:18 PM"
        },

        7:{
            activity:"Customer profile updated",
            user:"Vikram Singh",
            module:"Customers",
            severity:"Success",
            ip:"49.207.86.11",
            time:"14 Sep 2026, 03:12 PM"
        },

        8:{
            activity:"Failed login attempt",
            user:"Unknown User",
            module:"Staff",
            severity:"Warning",
            ip:"45.119.73.28",
            time:"14 Sep 2026, 11:48 PM"
        }

    };


    /* =====================================================
       OPEN DETAILS MODAL
    ===================================================== */

    function openAuditDetails(id) {

        const data =
            auditDetails[id];


        if (!data || !auditModal) {
            return;
        }


        const activity =
            document.getElementById(
                "modalActivity"
            );

        const user =
            document.getElementById(
                "modalUser"
            );

        const module =
            document.getElementById(
                "modalModule"
            );

        const severity =
            document.getElementById(
                "modalSeverity"
            );

        const ip =
            document.getElementById(
                "modalIP"
            );

        const time =
            document.getElementById(
                "modalTime"
            );


        if (activity) {
            activity.textContent =
                data.activity;
        }


        if (user) {
            user.textContent =
                data.user;
        }


        if (module) {
            module.textContent =
                data.module;
        }


        if (severity) {
            severity.textContent =
                data.severity;
        }


        if (ip) {
            ip.textContent =
                data.ip;
        }


        if (time) {
            time.textContent =
                data.time;
        }


        auditModal.show();

    }


    document
        .querySelectorAll(".view-btn")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    openAuditDetails(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    /* =====================================================
       EXPORT CSV
    ===================================================== */

    if (exportAuditBtn) {

        exportAuditBtn.addEventListener(
            "click",
            function () {


                if (!auditTableBody) {
                    return;
                }


                const rows =
                    Array.from(
                        auditTableBody.querySelectorAll("tr")
                    ).filter(
                        function (row) {

                            return (
                                row.style.display !== "none"
                            );

                        }
                    );


                const csvRows = [];


                csvRows.push([
                    "Activity",
                    "User",
                    "Module",
                    "Severity",
                    "IP Address",
                    "Time"
                ]);


                rows.forEach(function (row) {

                    const activity =
                        row.querySelector(
                            ".activity-cell strong"
                        )?.textContent
                        || "";


                    const user =
                        row.cells[1]?.textContent
                        || "";


                    const module =
                        row.cells[2]?.textContent
                        || "";


                    const severity =
                        row.querySelector(
                            ".severity"
                        )?.textContent
                        || "";


                    const ip =
                        row.cells[4]?.textContent
                        || "";


                    const time =
                        row.cells[5]?.textContent
                        || "";


                    csvRows.push([

                        activity.trim(),

                        user.trim(),

                        module.trim(),

                        severity.trim(),

                        ip.trim(),

                        time.trim()

                    ]);

                });


                const csv =
                    csvRows
                        .map(function (row) {

                            return row
                                .map(function (value) {

                                    return `"${String(value)
                                        .replace(/"/g, '""')}"`;

                                })
                                .join(",");

                        })
                        .join("\n");


                const blob =
                    new Blob(
                        [csv],
                        {
                            type:
                                "text/csv;charset=utf-8;"
                        }
                    );


                const url =
                    URL.createObjectURL(
                        blob
                    );


                const link =
                    document.createElement(
                        "a"
                    );


                link.href =
                    url;

                link.download =
                    "ozzo-audit-logs.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Export Complete",
                    "Audit logs exported successfully."
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