document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const sidebar =
        document.getElementById("adminSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const mobileNotificationBtn =
        document.getElementById("mobileNotificationBtn");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const closeNotifications =
        document.getElementById("closeNotifications");

    const logoutBtn =
        document.getElementById("logoutBtn");

    const toast =
        document.getElementById("adminToast");


    const adminSearch =
        document.getElementById("adminSearch");

    const auditSearch =
        document.getElementById("auditSearch");

    const userFilter =
        document.getElementById("userFilter");

    const actionFilter =
        document.getElementById("actionFilter");

    const dateFilter =
        document.getElementById("dateFilter");

    const clearFilters =
        document.getElementById("clearFilters");

    const auditResult =
        document.getElementById("auditResult");


    const auditModal =
        document.getElementById("auditModal");

    const closeAuditModal =
        document.getElementById("closeAuditModal");

    const closeAuditModalBtn =
        document.getElementById("closeAuditModalBtn");


    /* =========================================================
       AUDIT DATA
    ========================================================= */

    const auditEvents = [

        {
            user:"Anjali Rao",
            role:"Super Admin",
            action:"Login",
            module:"Admin",
            description:"Logged into admin panel",
            ip:"103.84.21.18",
            time:"10:42 AM",
            status:"Success"
        },

        {
            user:"Rahul Mehta",
            role:"Admin",
            action:"Update",
            module:"Products",
            description:"Updated product information",
            ip:"103.92.44.72",
            time:"10:16 AM",
            status:"Success"
        },

        {
            user:"Priya Sharma",
            role:"Manager",
            action:"Permission",
            module:"Roles",
            description:"Reviewed role permissions",
            ip:"49.204.12.61",
            time:"9:31 AM",
            status:"Success"
        },

        {
            user:"Vikram Singh",
            role:"Support",
            action:"Permission",
            module:"Support",
            description:"Changed support access settings",
            ip:"106.51.72.94",
            time:"8:47 AM",
            status:"Success"
        },

        {
            user:"Anjali Rao",
            role:"Super Admin",
            action:"Create",
            module:"Staff",
            description:"Created new staff invitation",
            ip:"103.84.21.18",
            time:"18 Sep · 6:14 PM",
            status:"Success"
        },

        {
            user:"Rahul Mehta",
            role:"Admin",
            action:"Export",
            module:"Reports",
            description:"Exported sales report",
            ip:"103.92.44.72",
            time:"18 Sep · 4:48 PM",
            status:"Success"
        },

        {
            user:"Priya Sharma",
            role:"Manager",
            action:"Update",
            module:"Orders",
            description:"Updated order processing status",
            ip:"49.204.12.61",
            time:"17 Sep · 3:22 PM",
            status:"Success"
        },

        {
            user:"Vikram Singh",
            role:"Support",
            action:"Delete",
            module:"Support",
            description:"Removed obsolete support rule",
            ip:"106.51.72.94",
            time:"16 Sep · 1:08 PM",
            status:"Success"
        }

    ];


    /* =========================================================
       TOAST
    ========================================================= */

    function showToast(message){

        if(!toast){
            return;
        }

        toast.textContent =
            message;

        toast.classList.add(
            "show"
        );

        clearTimeout(
            showToast.timer
        );

        showToast.timer =
            setTimeout(
                function(){

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }


    /* =========================================================
       SIDEBAR
       SAME INDEX.JS BEHAVIOUR
    ========================================================= */

    function toggleSidebar(forceOpen){

        const shouldOpen =
            typeof forceOpen === "boolean"
                ? forceOpen
                : !sidebar.classList.contains("show");


        sidebar.classList.toggle(
            "show",
            shouldOpen
        );


        overlay.classList.toggle(
            "show",
            shouldOpen
        );


        document.body.classList.toggle(
            "sidebar-open",
            shouldOpen
        );

    }


    if(mobileMenuBtn){

        mobileMenuBtn.addEventListener(
            "click",
            function(){

                toggleSidebar();

            }
        );

    }


    if(overlay){

        overlay.addEventListener(
            "click",
            function(){

                toggleSidebar(false);

            }
        );

    }


    /* =========================================================
       CLOSE SIDEBAR AFTER MOBILE NAVIGATION
    ========================================================= */

    document
        .querySelectorAll(
            ".admin-nav-link"
        )
        .forEach(
            function(link){

                link.addEventListener(
                    "click",
                    function(){

                        if(
                            window.innerWidth <
                            992
                        ){

                            toggleSidebar(false);

                        }

                    }
                );

            }
        );


    /* =========================================================
       NOTIFICATIONS
       SAME INDEX EFFECT
    ========================================================= */

    function toggleNotifications(){

        if(!notificationPanel){
            return;
        }

        notificationPanel.classList.toggle(
            "show"
        );

    }


    if(notificationBtn){

        notificationBtn.addEventListener(
            "click",
            function(event){

                event.stopPropagation();

                toggleNotifications();

            }
        );

    }


    if(mobileNotificationBtn){

        mobileNotificationBtn.addEventListener(
            "click",
            function(event){

                event.stopPropagation();

                toggleNotifications();

            }
        );

    }


    if(closeNotifications){

        closeNotifications.addEventListener(
            "click",
            function(){

                notificationPanel.classList.remove(
                    "show"
                );

            }
        );

    }


    document.addEventListener(
        "click",
        function(event){

            if(!notificationPanel){
                return;
            }


            const clickedInside =
                notificationPanel.contains(
                    event.target
                );


            const clickedDesktopButton =
                notificationBtn &&
                notificationBtn.contains(
                    event.target
                );


            const clickedMobileButton =
                mobileNotificationBtn &&
                mobileNotificationBtn.contains(
                    event.target
                );


            if(
                !clickedInside &&
                !clickedDesktopButton &&
                !clickedMobileButton
            ){

                notificationPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =========================================================
       LOGOUT
    ========================================================= */

    if(logoutBtn){

        logoutBtn.addEventListener(
            "click",
            function(){

                showToast(
                    "Logout action triggered."
                );

            }
        );

    }


    /* =========================================================
       FILTERING
    ========================================================= */

    function applyFilters(){

        const globalQuery =
            adminSearch?.value
                .trim()
                .toLowerCase() || "";


        const tableQuery =
            auditSearch?.value
                .trim()
                .toLowerCase() || "";


        const query =
            `${globalQuery} ${tableQuery}`
                .trim()
                .toLowerCase();


        const selectedUser =
            userFilter.value;


        const selectedAction =
            actionFilter.value;


        const selectedDate =
            dateFilter.value;


        let visibleCount = 0;


        const rows =
            document.querySelectorAll(
                "#auditTable tbody tr"
            );


        rows.forEach(
            function(row, index){

                const event =
                    auditEvents[index];


                if(!event){
                    return;
                }


                const searchableText =
                    `
                        ${event.user}
                        ${event.role}
                        ${event.action}
                        ${event.module}
                        ${event.description}
                        ${event.ip}
                    `
                    .toLowerCase();


                const searchMatch =
                    !query ||
                    query
                        .split(/\s+/)
                        .filter(Boolean)
                        .every(
                            function(token){

                                return searchableText.includes(
                                    token
                                );

                            }
                        );


                const userMatch =
                    selectedUser === "all" ||
                    event.user === selectedUser;


                const actionMatch =
                    selectedAction === "all" ||
                    event.action === selectedAction;


                let dateMatch = true;


                if(
                    selectedDate === "today"
                ){

                    dateMatch =
                        Number(
                            row.dataset.days
                        ) === 0;

                }
                else if(
                    selectedDate !== "all"
                ){

                    dateMatch =
                        Number(
                            row.dataset.days
                        ) <=
                        Number(
                            selectedDate
                        );

                }


                const visible =
                    searchMatch &&
                    userMatch &&
                    actionMatch &&
                    dateMatch;


                row.classList.toggle(
                    "audit-row-hidden",
                    !visible
                );


                if(visible){

                    visibleCount++;

                }

            }
        );


        auditResult.textContent =
            `Showing ${visibleCount} of 1,248 events`;

    }


    if(adminSearch){

        adminSearch.addEventListener(
            "input",
            function(){

                applyFilters();

                if(
                    auditSearch
                ){

                    auditSearch.value =
                        adminSearch.value;

                }

            }
        );

    }


    if(auditSearch){

        auditSearch.addEventListener(
            "input",
            function(){

                applyFilters();

                if(
                    adminSearch &&
                    adminSearch.value !==
                    auditSearch.value
                ){

                    adminSearch.value =
                        auditSearch.value;

                }

            }
        );

    }


    userFilter.addEventListener(
        "change",
        applyFilters
    );


    actionFilter.addEventListener(
        "change",
        applyFilters
    );


    dateFilter.addEventListener(
        "change",
        applyFilters
    );


    /* =========================================================
       CLEAR FILTERS
    ========================================================= */

    if(clearFilters){

        clearFilters.addEventListener(
            "click",
            function(){

                if(adminSearch){
                    adminSearch.value = "";
                }

                if(auditSearch){
                    auditSearch.value = "";
                }

                userFilter.value = "all";
                actionFilter.value = "all";
                dateFilter.value = "all";

                applyFilters();

                showToast(
                    "Audit filters cleared."
                );

            }
        );

    }


    /* =========================================================
       EVENT MODAL
    ========================================================= */

    const modalUser =
        document.getElementById(
            "modalUser"
        );

    const modalRole =
        document.getElementById(
            "modalRole"
        );

    const modalModule =
        document.getElementById(
            "modalModule"
        );

    const modalIP =
        document.getElementById(
            "modalIP"
        );

    const modalTime =
        document.getElementById(
            "modalTime"
        );

    const modalStatus =
        document.getElementById(
            "modalStatus"
        );

    const modalEventAction =
        document.getElementById(
            "modalEventAction"
        );

    const modalEventDescription =
        document.getElementById(
            "modalEventDescription"
        );


    function openAuditModal(index){

        const event =
            auditEvents[index];


        if(!event){
            return;
        }


        modalUser.textContent =
            event.user;


        modalRole.textContent =
            event.role;


        modalModule.textContent =
            event.module;


        modalIP.textContent =
            event.ip;


        modalTime.textContent =
            event.time;


        modalStatus.textContent =
            event.status;


        modalEventAction.textContent =
            event.action;


        modalEventDescription.textContent =
            event.description;


        auditModal.classList.add(
            "show"
        );


        auditModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeAudit(){

        auditModal.classList.remove(
            "show"
        );


        auditModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    document
        .querySelectorAll(
            ".audit-view-btn"
        )
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        const index =
                            Number(
                                button.dataset.event
                            );

                        openAuditModal(
                            index
                        );

                    }
                );

            }
        );


    closeAuditModal?.addEventListener(
        "click",
        closeAudit
    );


    closeAuditModalBtn?.addEventListener(
        "click",
        closeAudit
    );


    auditModal
        ?.querySelector(
            ".audit-modal-backdrop"
        )
        ?.addEventListener(
            "click",
            closeAudit
        );


    /* =========================================================
       PAGINATION DEMO
    ========================================================= */

    document
        .querySelectorAll(
            ".audit-page-btn"
        )
        .forEach(
            function(button){

                button.addEventListener(
                    "click",
                    function(){

                        if(
                            button.classList.contains(
                                "disabled"
                            )
                        ){

                            return;

                        }


                        if(
                            button.classList.contains(
                                "current"
                            )
                        ){

                            return;

                        }


                        const page =
                            button.textContent.trim();


                        if(
                            page === ""
                        ){

                            showToast(
                                "Pagination action triggered."
                            );

                            return;

                        }


                        document
                            .querySelectorAll(
                                ".audit-page-btn"
                            )
                            .forEach(
                                function(item){

                                    item.classList.remove(
                                        "current"
                                    );

                                }
                            );


                        button.classList.add(
                            "current"
                        );


                        showToast(
                            `Audit page ${page} selected.`
                        );

                    }
                );

            }
        );


    /* =========================================================
       EXPORT
    ========================================================= */

    const exportBtn =
        document.getElementById(
            "exportBtn"
        );


    if(exportBtn){

        exportBtn.addEventListener(
            "click",
            function(){

                showToast(
                    "Audit log export started."
                );

            }
        );

    }


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        function(event){

            if(
                event.key !== "Escape"
            ){

                return;

            }


            toggleSidebar(false);


            notificationPanel?.classList.remove(
                "show"
            );


            closeAudit();

        }
    );

});