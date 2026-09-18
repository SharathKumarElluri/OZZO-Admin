document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

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


    const adminSearch =
        document.getElementById("adminSearch");

    const franchiseSearch =
        document.getElementById("franchiseSearch");


    const dateRange =
        document.getElementById("dateRange");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const channelFilter =
        document.getElementById("channelFilter");

    const resetFilters =
        document.getElementById("resetFilters");


    const chartPeriod =
        document.getElementById("chartPeriod");

    const trendValue =
        document.getElementById("trendValue");


    const exportReport =
        document.getElementById("exportReport");

    const exportProducts =
        document.getElementById("exportProducts");


    const toast =
        document.getElementById("adminToast");


    /* =====================================================
       TOAST
    ====================================================== */

    let toastTimer;


    function showToast(message){

        toast.textContent =
            message;

        toast.classList.add("show");


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                function(){

                    toast.classList.remove(
                        "show"
                    );

                },
                2600
            );

    }


    /* =====================================================
       MOBILE SIDEBAR
    ====================================================== */

    mobileMenuBtn.addEventListener(
        "click",
        function(){

            sidebar.classList.add(
                "show"
            );

            overlay.classList.add(
                "show"
            );

        }
    );


    overlay.addEventListener(
        "click",
        function(){

            sidebar.classList.remove(
                "show"
            );

            overlay.classList.remove(
                "show"
            );

        }
    );


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
                            window.innerWidth <=
                            991.98
                        ){

                            sidebar.classList.remove(
                                "show"
                            );

                            overlay.classList.remove(
                                "show"
                            );

                        }

                    }
                );

            }
        );


    /* =====================================================
       NOTIFICATIONS
    ====================================================== */

    function toggleNotifications(){

        notificationPanel.classList.toggle(
            "show"
        );

    }


    notificationBtn.addEventListener(
        "click",
        toggleNotifications
    );


    mobileNotificationBtn.addEventListener(
        "click",
        toggleNotifications
    );


    closeNotifications.addEventListener(
        "click",
        function(){

            notificationPanel.classList.remove(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function(event){

            if(
                notificationPanel.classList.contains(
                    "show"
                ) &&

                !notificationPanel.contains(
                    event.target
                ) &&

                !notificationBtn.contains(
                    event.target
                ) &&

                !mobileNotificationBtn.contains(
                    event.target
                )
            ){

                notificationPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       SEARCH
    ====================================================== */

    const searchableRows =
        document.querySelectorAll(
            ".searchable-row"
        );


    adminSearch.addEventListener(
        "input",
        function(){

            const value =
                this.value
                    .trim()
                    .toLowerCase();


            searchableRows.forEach(
                function(row){

                    const text =
                        row.textContent
                            .toLowerCase();


                    row.style.display =
                        !value ||
                        text.includes(value)
                            ? ""
                            : "none";

                }
            );

        }
    );


    /* =====================================================
       FILTERS
    ====================================================== */

    function filterReport(){

        showToast(
            "Sales report updated."
        );

    }


    dateRange.addEventListener(
        "change",
        filterReport
    );


    categoryFilter.addEventListener(
        "change",
        filterReport
    );


    channelFilter.addEventListener(
        "change",
        filterReport
    );


    resetFilters.addEventListener(
        "click",
        function(){

            dateRange.value =
                "7";

            categoryFilter.value =
                "";

            channelFilter.value =
                "";


            showToast(
                "Report filters reset."
            );

        }
    );


    /* =====================================================
       CHART DATA
    ====================================================== */

    const chartData = {

        "7":[
            46,
            59,
            71,
            54,
            84,
            68,
            92
        ],

        "30":[
            42,
            51,
            63,
            58,
            71,
            77,
            69
        ],

        "6m":[
            50,
            62,
            68,
            73,
            81,
            91
        ],

        "year":[
            36,
            44,
            52,
            61,
            68,
            74,
            82,
            88,
            94,
            96,
            99,
            100
        ]

    };


    const chartLabels = {

        "7":[
            "12 Sep",
            "13 Sep",
            "14 Sep",
            "15 Sep",
            "16 Sep",
            "17 Sep",
            "18 Sep"
        ],

        "30":[
            "20 Aug",
            "24 Aug",
            "28 Aug",
            "01 Sep",
            "05 Sep",
            "10 Sep",
            "18 Sep"
        ],

        "6m":[
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
        ],

        "year":[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ]

    };


    function updateChart(){

        const selected =
            chartPeriod.value;


        const values =
            chartData[selected];


        const labels =
            chartLabels[selected];


        const bars =
            document.getElementById(
                "reportBars"
            );


        bars.innerHTML = "";


        values.forEach(
            function(value,index){

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "report-bar-item";


                item.innerHTML = `

                    <div class="report-bar-value">
                        ${value}%
                    </div>

                    <div class="report-bar">

                        <span
                            style="
                            height:${value}%;
                            "
                        ></span>

                    </div>

                    <small>
                        ${labels[index]}
                    </small>

                `;


                bars.appendChild(
                    item
                );

            }
        );


        const totals = {

            "7":"₹4,86,740",

            "30":"₹11,92,480",

            "6m":"₹28,64,920",

            "year":"₹1,24,86,740"

        };


        trendValue.textContent =
            totals[selected];


        showToast(
            "Revenue trend updated."
        );

    }


    chartPeriod.addEventListener(
        "change",
        updateChart
    );


    /* =====================================================
       EXPORT FULL REPORT
    ====================================================== */

    exportReport.addEventListener(
        "click",
        function(){

            const csv = [

                [
                    "Sales Report",
                    "September 2026"
                ],

                [],

                [
                    "Metric",
                    "Value"
                ],

                [
                    "Gross Sales",
                    "1284620"
                ],

                [
                    "Net Sales",
                    "1192480"
                ],

                [
                    "Total Orders",
                    "1486"
                ],

                [
                    "Average Order Value",
                    "802"
                ],

                [],

                [
                    "Category",
                    "Revenue"
                ],

                [
                    "Fashion",
                    "428640"
                ],

                [
                    "Books",
                    "312860"
                ],

                [
                    "Stationery",
                    "236480"
                ],

                [
                    "Pads & Personal Care",
                    "214500"
                ]

            ];


            downloadCSV(
                csv,
                "ozzo-sales-report.csv"
            );


            showToast(
                "Sales report exported."
            );

        }
    );


    /* =====================================================
       EXPORT PRODUCTS
    ====================================================== */

    exportProducts.addEventListener(
        "click",
        function(){

            const rows = [

                [
                    "Rank",
                    "Product",
                    "Category",
                    "Units Sold",
                    "Revenue",
                    "Share"
                ],

                [
                    "1",
                    "Classic Oversized Shirt",
                    "Fashion",
                    "428",
                    "556720",
                    "43.3%"
                ],

                [
                    "2",
                    "Atomic Habits",
                    "Books",
                    "371",
                    "185129",
                    "14.4%"
                ],

                [
                    "3",
                    "Notebook Set",
                    "Stationery",
                    "324",
                    "129840",
                    "10.1%"
                ],

                [
                    "4",
                    "Ultra Thin Day Pads",
                    "Pads",
                    "289",
                    "121280",
                    "9.4%"
                ],

                [
                    "5",
                    "Urban Hoodie",
                    "Fashion",
                    "214",
                    "98440",
                    "7.7%"
                ]

            ];


            downloadCSV(
                rows,
                "ozzo-top-products.csv"
            );


            showToast(
                "Product sales exported."
            );

        }
    );


    function downloadCSV(
        rows,
        filename
    ){

        let csv = "";


        rows.forEach(
            function(row){

                csv +=
                    row
                        .map(
                            function(value){

                                return `"${String(
                                    value
                                ).replace(
                                    /"/g,
                                    '""'
                                )}"`;

                            }
                        )
                        .join(",")
                    +
                    "\n";

            }
        );


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
            filename;


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );

    }


    /* =====================================================
       LOGOUT
    ====================================================== */

    document
        .getElementById(
            "logoutBtn"
        )
        .addEventListener(
            "click",
            function(){

                if(
                    confirm(
                        "Are you sure you want to logout?"
                    )
                ){

                    showToast(
                        "Logout action selected."
                    );

                }

            }
        );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    updateChart();

});