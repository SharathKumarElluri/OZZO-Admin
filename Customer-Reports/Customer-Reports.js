document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const sidebar =
        document.getElementById(
            "adminSidebar"
        );

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    const mobileMenuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );


    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );

    const mobileNotificationBtn =
        document.getElementById(
            "mobileNotificationBtn"
        );

    const notificationPanel =
        document.getElementById(
            "notificationPanel"
        );

    const closeNotifications =
        document.getElementById(
            "closeNotifications"
        );


    const adminSearch =
        document.getElementById(
            "adminSearch"
        );


    const periodFilter =
        document.getElementById(
            "periodFilter"
        );

    const segmentFilter =
        document.getElementById(
            "segmentFilter"
        );

    const locationFilter =
        document.getElementById(
            "locationFilter"
        );


    const resetFilters =
        document.getElementById(
            "resetFilters"
        );


    const growthPeriod =
        document.getElementById(
            "growthPeriod"
        );


    const growthTotal =
        document.getElementById(
            "growthTotal"
        );


    const growthBars =
        document.getElementById(
            "growthBars"
        );


    const exportReport =
        document.getElementById(
            "exportReport"
        );


    const exportCustomers =
        document.getElementById(
            "exportCustomers"
        );


    const customerRows =
        document.querySelectorAll(
            ".customer-row"
        );


    const toast =
        document.getElementById(
            "adminToast"
        );


    /* =====================================================
       TOAST
    ====================================================== */

    let toastTimer;


    function showToast(message){

        toast.textContent =
            message;

        toast.classList.add(
            "show"
        );


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
                )

                &&

                !notificationPanel.contains(
                    event.target
                )

                &&

                !notificationBtn.contains(
                    event.target
                )

                &&

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

    adminSearch.addEventListener(
        "input",
        function(){

            const search =
                this.value
                    .trim()
                    .toLowerCase();


            customerRows.forEach(
                function(row){

                    const text =
                        row.textContent
                            .toLowerCase();


                    row.style.display =
                        !search ||
                        text.includes(search)
                            ? ""
                            : "none";

                }
            );

        }
    );


    /* =====================================================
       FILTERS
    ====================================================== */

    function applyFilters(){

        const segment =
            segmentFilter.value
                .toLowerCase();

        const location =
            locationFilter.value
                .toLowerCase();


        customerRows.forEach(
            function(row){

                const text =
                    row.textContent
                        .toLowerCase();


                let visible = true;


                if(
                    segment &&
                    !text.includes(
                        segment
                    )
                ){

                    visible = false;

                }


                if(
                    location &&
                    !text.includes(
                        location
                    )
                ){

                    visible = false;

                }


                row.style.display =
                    visible
                        ? ""
                        : "none";

            }
        );


        showToast(
            "Customer report updated."
        );

    }


    periodFilter.addEventListener(
        "change",
        applyFilters
    );


    segmentFilter.addEventListener(
        "change",
        applyFilters
    );


    locationFilter.addEventListener(
        "change",
        applyFilters
    );


    resetFilters.addEventListener(
        "click",
        function(){

            periodFilter.value =
                "30";

            segmentFilter.value =
                "";

            locationFilter.value =
                "";


            customerRows.forEach(
                function(row){

                    row.style.display =
                        "";

                }
            );


            showToast(
                "Customer filters reset."
            );

        }
    );


    /* =====================================================
       CUSTOMER GROWTH
    ====================================================== */

    const growthData = {

        "30":{

            total:"186",

            values:[
                41,
                53,
                60,
                70,
                78
            ]

        },


        "90":{

            total:"548",

            values:[
                45,
                56,
                65,
                74,
                86
            ]

        },


        "year":{

            total:"2,143",

            values:[
                32,
                43,
                51,
                59,
                68,
                76,
                82,
                88,
                95,
                97,
                99,
                100
            ]

        }

    };


    const growthLabels = {

        "30":[
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Current"
        ],

        "90":[
            "Month 1",
            "Month 2",
            "Month 3",
            "Month 4",
            "Current"
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


    function updateGrowth(){

        const selected =
            growthPeriod.value;


        const data =
            growthData[selected];


        growthTotal.textContent =
            data.total;


        growthBars.innerHTML =
            "";


        data.values.forEach(
            function(value,index){

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "growth-bar-item";


                item.innerHTML = `

                    <div class="growth-value">
                        ${value}
                    </div>


                    <div class="growth-bar">

                        <span
                            style="
                            height:${value}%;
                            "
                        ></span>

                    </div>


                    <small>
                        ${growthLabels[selected][index]}
                    </small>

                `;


                growthBars.appendChild(
                    item
                );

            }
        );


        showToast(
            "Customer growth updated."
        );

    }


    growthPeriod.addEventListener(
        "change",
        updateGrowth
    );


    /* =====================================================
       EXPORT FULL REPORT
    ====================================================== */

    exportReport.addEventListener(
        "click",
        function(){

            const rows = [

                [
                    "Customer Report",
                    "September 2026"
                ],

                [],

                [
                    "Metric",
                    "Value"
                ],

                [
                    "Total Customers",
                    "2143"
                ],

                [
                    "New Customers",
                    "186"
                ],

                [
                    "Repeat Customers",
                    "1284"
                ],

                [
                    "Customer Revenue",
                    "1864920"
                ],

                [
                    "Average Customer Spend",
                    "1246"
                ],

                [
                    "Repeat Purchase Rate",
                    "59.9%"
                ],

                [],

                [
                    "Segment",
                    "Customers"
                ],

                [
                    "VIP",
                    "128"
                ],

                [
                    "Regular",
                    "1218"
                ],

                [
                    "New",
                    "186"
                ],

                [
                    "Inactive",
                    "611"
                ]

            ];


            downloadCSV(
                rows,
                "ozzo-customer-report.csv"
            );


            showToast(
                "Customer report exported."
            );

        }
    );


    /* =====================================================
       EXPORT CUSTOMERS
    ====================================================== */

    exportCustomers.addEventListener(
        "click",
        function(){

            const rows = [

                [
                    "Rank",
                    "Customer",
                    "Email",
                    "Segment",
                    "Orders",
                    "Total Spent",
                    "Last Order",
                    "City"
                ],

                [
                    "1",
                    "Rahul Kumar",
                    "rahul@example.com",
                    "VIP",
                    "28",
                    "38420",
                    "18 Sep 2026",
                    "Hyderabad"
                ],

                [
                    "2",
                    "Priya Sharma",
                    "priya@example.com",
                    "Regular",
                    "22",
                    "31860",
                    "17 Sep 2026",
                    "Bengaluru"
                ],

                [
                    "3",
                    "Arjun Reddy",
                    "arjun@example.com",
                    "Regular",
                    "19",
                    "27680",
                    "17 Sep 2026",
                    "Hyderabad"
                ],

                [
                    "4",
                    "Sneha Patel",
                    "sneha@example.com",
                    "VIP",
                    "17",
                    "26540",
                    "16 Sep 2026",
                    "Mumbai"
                ],

                [
                    "5",
                    "Vikram Singh",
                    "vikram@example.com",
                    "New",
                    "8",
                    "12840",
                    "16 Sep 2026",
                    "Chennai"
                ],

                [
                    "6",
                    "Ananya Mehta",
                    "ananya@example.com",
                    "Regular",
                    "14",
                    "21460",
                    "15 Sep 2026",
                    "Pune"
                ]

            ];


            downloadCSV(
                rows,
                "ozzo-customer-performance.csv"
            );


            showToast(
                "Customer data exported."
            );

        }
    );


    /* =====================================================
       CSV
    ====================================================== */

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

    updateGrowth();

});