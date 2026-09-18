document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       OZZO ADMIN PANEL - MAIN JAVASCRIPT
    ========================================================= */

    const sidebar = document.getElementById("adminSidebar");
    const overlay = document.getElementById("sidebarOverlay");

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");

    const notificationBtn = document.getElementById("notificationBtn");
    const mobileNotificationBtn = document.getElementById("mobileNotificationBtn");
    const notificationPanel = document.getElementById("notificationPanel");
    const closeNotifications = document.getElementById("closeNotifications");

    const searchInput = document.getElementById("adminSearch");

    const toast = document.getElementById("adminToast");

    const salesRange = document.getElementById("salesRange");
    const chartRevenue = document.getElementById("chartRevenue");
    const salesLine = document.getElementById("salesLine");
    const salesArea = document.getElementById("salesArea");
    const chartDays = document.getElementById("chartDays");

    const currentDate = document.getElementById("currentDate");

    const logoutBtn = document.getElementById("logoutBtn");


    /* =========================================================
       SIDEBAR
    ========================================================= */

    function toggleSidebar(forceOpen) {

        if (!sidebar || !overlay) return;

        const shouldOpen =
            typeof forceOpen === "boolean"
                ? forceOpen
                : !sidebar.classList.contains("show");

        sidebar.classList.toggle("show", shouldOpen);
        overlay.classList.toggle("show", shouldOpen);

        document.body.classList.toggle(
            "sidebar-open",
            shouldOpen
        );
    }


    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", function () {
            toggleSidebar();
        });
    }


    if (overlay) {
        overlay.addEventListener("click", function () {
            toggleSidebar(false);
        });
    }


    /* =========================================================
       SIDEBAR NAVIGATION
    ========================================================= */

    document
        .querySelectorAll(".admin-nav-link[data-section]")
        .forEach(function (link) {

            link.addEventListener("click", function () {

                document
                    .querySelectorAll(".admin-nav-link[data-section]")
                    .forEach(function (item) {
                        item.classList.remove("active");
                    });

                link.classList.add("active");


                /* Close sidebar on mobile */

                if (window.innerWidth < 992) {
                    toggleSidebar(false);
                }


                const section = link.dataset.section;

                if (section !== "dashboard") {

                    const label =
                        link.querySelector("span")?.textContent.trim()
                        || "Module";

                    showToast(
                        label + " module is ready to connect."
                    );


                    /* Update URL */

                    history.replaceState(
                        null,
                        "",
                        "#" + section
                    );


                    /* Scroll to top */

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }

            });

        });


    /* =========================================================
       NOTIFICATIONS
    ========================================================= */

    function toggleNotifications() {

        if (!notificationPanel) return;

        notificationPanel.classList.toggle("show");

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
            function () {

                notificationPanel.classList.remove("show");

            }
        );

    }


    /* Close notifications when clicking outside */

    document.addEventListener(
        "click",
        function (event) {

            if (!notificationPanel) return;

            const clickedInside =
                notificationPanel.contains(event.target);

            const clickedDesktopBtn =
                notificationBtn &&
                notificationBtn.contains(event.target);

            const clickedMobileBtn =
                mobileNotificationBtn &&
                mobileNotificationBtn.contains(event.target);


            if (
                !clickedInside &&
                !clickedDesktopBtn &&
                !clickedMobileBtn
            ) {

                notificationPanel.classList.remove("show");

            }

        }
    );


    /* =========================================================
       TOAST MESSAGE
    ========================================================= */

    function showToast(message) {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(showToast.timer);

        showToast.timer = setTimeout(function () {

            toast.classList.remove("show");

        }, 2200);

    }


    /* =========================================================
       QUICK ACTIONS
    ========================================================= */

    document
        .querySelectorAll(".action-placeholder")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    const action =
                        button.dataset.action ||
                        button.textContent.trim() ||
                        "This action";


                    showToast(
                        action + " is ready to connect."
                    );

                }
            );

        });


    /* =========================================================
       LOGOUT
    ========================================================= */

    if (logoutBtn) {

        logoutBtn.addEventListener(
            "click",
            function () {

                showToast(
                    "Logout flow is ready to connect."
                );

            }
        );

    }


    /* =========================================================
       ADMIN SEARCH
    ========================================================= */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                const query =
                    searchInput.value
                        .trim()
                        .toLowerCase();


                document
                    .querySelectorAll(".dashboard-search-item")
                    .forEach(function (item) {

                        const text =
                            item.textContent.toLowerCase();


                        const shouldHide =
                            query !== "" &&
                            !text.includes(query);


                        item.classList.toggle(
                            "search-hidden",
                            shouldHide
                        );

                    });

            }
        );

    }


    /* =========================================================
       SALES CHART DATA
    ========================================================= */

    const salesProfiles = {

        "7": {

            revenue: "₹1,46,820",

            line:
                "M0,215 C70,205 95,185 150,175 C205,165 220,145 270,150 C325,155 345,122 400,130 C450,140 470,95 520,106 C575,117 595,70 700,52",

            area:
                "M0,215 C70,205 95,185 150,175 C205,165 220,145 270,150 C325,155 345,122 400,130 C450,140 470,95 520,106 C575,117 595,70 700,52 L700,260 L0,260 Z",

            days: [
                "12 Sep",
                "13 Sep",
                "14 Sep",
                "15 Sep",
                "16 Sep",
                "17 Sep",
                "18 Sep"
            ]

        },


        "30": {

            revenue: "₹4,86,740",

            line:
                "M0,220 C65,210 85,192 140,180 C195,165 230,150 280,155 C330,160 360,128 410,136 C460,144 495,94 545,110 C595,126 625,76 700,58",

            area:
                "M0,220 C65,210 85,192 140,180 C195,165 230,150 280,155 C330,160 360,128 410,136 C460,144 495,94 545,110 C595,126 625,76 700,58 L700,260 L0,260 Z",

            days: [
                "20 Aug",
                "25 Aug",
                "30 Aug",
                "04 Sep",
                "09 Sep",
                "14 Sep",
                "18 Sep"
            ]

        },


        "6m": {

            revenue: "₹24,86,300",

            line:
                "M0,205 C55,175 100,185 150,155 C200,125 240,145 290,128 C340,111 380,122 430,95 C480,68 525,90 565,74 C615,58 655,72 700,42",

            area:
                "M0,205 C55,175 100,185 150,155 C200,125 240,145 290,128 C340,111 380,122 430,95 C480,68 525,90 565,74 C615,58 655,72 700,42 L700,260 L0,260 Z",

            days: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Now"
            ]

        },


        "year": {

            revenue: "₹51,24,880",

            line:
                "M0,215 C55,205 100,170 150,182 C205,194 235,136 290,148 C345,160 385,118 430,125 C485,132 525,84 570,94 C620,105 660,63 700,54",

            area:
                "M0,215 C55,205 100,170 150,182 C205,194 235,136 290,148 C345,160 385,118 430,125 C485,132 525,84 570,94 C620,105 660,63 700,54 L700,260 L0,260 Z",

            days: [
                "Jan",
                "Mar",
                "May",
                "Jul",
                "Aug",
                "Sep",
                "Now"
            ]

        }

    };


    /* =========================================================
       UPDATE SALES CHART
    ========================================================= */

    function updateSalesChart(value) {

        const profile =
            salesProfiles[value];


        if (!profile) return;


        if (chartRevenue) {

            chartRevenue.textContent =
                profile.revenue;

        }


        if (salesLine) {

            salesLine.setAttribute(
                "d",
                profile.line
            );

        }


        if (salesArea) {

            salesArea.setAttribute(
                "d",
                profile.area
            );

        }


        if (chartDays) {

            chartDays.innerHTML =
                profile.days
                    .map(function (day) {

                        return `<span>${day}</span>`;

                    })
                    .join("");

        }

    }


    /* =========================================================
       SALES RANGE FILTER
    ========================================================= */

    if (salesRange) {

        salesRange.addEventListener(
            "change",
            function () {

                updateSalesChart(
                    salesRange.value
                );


                showToast(
                    "Sales chart updated."
                );

            }
        );

    }


    /* =========================================================
       CURRENT DATE
    ========================================================= */

    if (currentDate) {

        const date = new Date();

        const month =
            date.toLocaleString(
                "en-IN",
                {
                    month: "long"
                }
            );


        currentDate.textContent =
            `${month} ${date.getFullYear()}`;

    }


    /* =========================================================
       INITIAL CHART
    ========================================================= */

    updateSalesChart("7");


    /* =========================================================
       HANDLE WINDOW RESIZE
    ========================================================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth >= 992 &&
                sidebar &&
                sidebar.classList.contains("show")
            ) {

                toggleSidebar(false);

            }

        }
    );


    /* =========================================================
       ESC KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (notificationPanel) {
                    notificationPanel.classList.remove("show");
                }

                if (
                    window.innerWidth < 992 &&
                    sidebar &&
                    sidebar.classList.contains("show")
                ) {

                    toggleSidebar(false);

                }

            }

        }
    );

});