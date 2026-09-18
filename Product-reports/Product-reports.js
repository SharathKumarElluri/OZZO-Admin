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

    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );

    const statusFilter =
        document.getElementById(
            "statusFilter"
        );


    const resetFilters =
        document.getElementById(
            "resetFilters"
        );


    const trendFilter =
        document.getElementById(
            "trendFilter"
        );


    const unitsValue =
        document.getElementById(
            "unitsValue"
        );


    const productBars =
        document.getElementById(
            "productBars"
        );


    const exportReport =
        document.getElementById(
            "exportReport"
        );


    const exportProducts =
        document.getElementById(
            "exportProducts"
        );


    const toast =
        document.getElementById(
            "adminToast"
        );


    const productRows =
        document.querySelectorAll(
            ".product-row"
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
                2500
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


            productRows.forEach(
                function(row){

                    const text =
                        row.textContent
                            .toLowerCase();


                    row.style.display =
                        !search ||
                        text.includes(
                            search
                        )
                            ? ""
                            : "none";

                }
            );

        }
    );


    /* =====================================================
       FILTERS
    ====================================================== */

    function updateFilters(){

        const category =
            categoryFilter.value
                .toLowerCase();

        const status =
            statusFilter.value
                .toLowerCase();


        productRows.forEach(
            function(row){

                const text =
                    row.textContent
                        .toLowerCase();


                let visible = true;


                if(
                    category &&
                    !text.includes(
                        category
                    )
                ){

                    visible = false;

                }


                if(
                    status === "best seller"
                ){

                    if(
                        !text.includes(
                            "428"
                        )
                    ){

                        visible = false;

                    }

                }


                if(
                    status === "low stock"
                ){

                    if(
                        !text.includes(
                            "low stock"
                        )
                    ){

                        visible = false;

                    }

                }


                row.style.display =
                    visible
                        ? ""
                        : "none";

            }
        );


        showToast(
            "Product report updated."
        );

    }


    periodFilter.addEventListener(
        "change",
        updateFilters
    );


    categoryFilter.addEventListener(
        "change",
        updateFilters
    );


    statusFilter.addEventListener(
        "change",
        updateFilters
    );


    resetFilters.addEventListener(
        "click",
        function(){

            periodFilter.value =
                "30";

            categoryFilter.value =
                "";

            statusFilter.value =
                "";


            productRows.forEach(
                function(row){

                    row.style.display =
                        "";

                }
            );


            showToast(
                "Product filters reset."
            );

        }
    );


    /* =====================================================
       TREND DATA
    ====================================================== */

    const trendData = {

        "30":{
            units:"8,426",
            bars:[
                43,
                58,
                49,
                70,
                82,
                91
            ]
        },

        "90":{
            units:"22,840",
            bars:[
                42,
                54,
                65,
                61,
                78,
                92
            ]
        },

        "year":{
            units:"84,260",
            bars:[
                35,
                44,
                52,
                61,
                69,
                77,
                82,
                88,
                94,
                97,
                99,
                100
            ]
        }

    };


    const trendLabels = {

        "30":[
            "Week 1",
            "Week 2",
            "Week 3",
            "Week 4",
            "Week 5",
            "Current"
        ],

        "90":[
            "Month 1",
            "Month 2",
            "Month 3",
            "Month 4",
            "Month 5",
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


    function updateTrend(){

        const selected =
            trendFilter.value;


        const data =
            trendData[selected];


        unitsValue.textContent =
            data.units;


        productBars.innerHTML =
            "";


        data.bars.forEach(
            function(value,index){

                const item =
                    document.createElement(
                        "div"
                    );


                item.className =
                    "product-bar-item";


                item.innerHTML = `

                    <div
                        class="product-bar"
                    >

                        <span
                            style="
                            height:${value}%;
                            "
                        ></span>

                    </div>


                    <small>
                        ${trendLabels[selected][index]}
                    </small>

                `;


                productBars.appendChild(
                    item
                );

            }
        );


        showToast(
            "Product sales trend updated."
        );

    }


    trendFilter.addEventListener(
        "change",
        updateTrend
    );


    /* =====================================================
       EXPORT REPORT
    ====================================================== */

    exportReport.addEventListener(
        "click",
        function(){

            const rows = [

                [
                    "Product Report",
                    "September 2026"
                ],

                [],

                [
                    "Metric",
                    "Value"
                ],

                [
                    "Total Products",
                    "46"
                ],

                [
                    "Units Sold",
                    "8426"
                ],

                [
                    "Product Revenue",
                    "1248620"
                ],

                [
                    "Average Rating",
                    "4.7"
                ],

                [],

                [
                    "Category",
                    "Units Sold"
                ],

                [
                    "Fashion",
                    "3042"
                ],

                [
                    "Books",
                    "2276"
                ],

                [
                    "Stationery",
                    "1854"
                ],

                [
                    "Pads & Personal Care",
                    "1254"
                ]

            ];


            downloadCSV(
                rows,
                "ozzo-product-report.csv"
            );


            showToast(
                "Product report exported."
            );

        }
    );


    /* =====================================================
       EXPORT PRODUCT DATA
    ====================================================== */

    exportProducts.addEventListener(
        "click",
        function(){

            const rows = [

                [
                    "Rank",
                    "Product",
                    "Category",
                    "SKU",
                    "Units Sold",
                    "Revenue",
                    "Rating",
                    "Stock"
                ],

                [
                    "1",
                    "Classic Oversized Shirt",
                    "Fashion",
                    "FSH-001",
                    "428",
                    "556720",
                    "4.9",
                    "In Stock"
                ],

                [
                    "2",
                    "Atomic Habits",
                    "Books",
                    "BOK-001",
                    "371",
                    "185129",
                    "4.8",
                    "In Stock"
                ],

                [
                    "3",
                    "Notebook Set",
                    "Stationery",
                    "STN-001",
                    "324",
                    "129840",
                    "4.7",
                    "Low Stock"
                ],

                [
                    "4",
                    "Ultra Thin Day Pads",
                    "Pads",
                    "PAD-001",
                    "289",
                    "121280",
                    "4.6",
                    "In Stock"
                ],

                [
                    "5",
                    "Urban Hoodie",
                    "Fashion",
                    "FSH-002",
                    "214",
                    "98440",
                    "4.5",
                    "Low Stock"
                ],

                [
                    "6",
                    "Gel Pen Set",
                    "Stationery",
                    "STN-002",
                    "192",
                    "82360",
                    "4.4",
                    "Low Stock"
                ]

            ];


            downloadCSV(
                rows,
                "ozzo-product-performance.csv"
            );


            showToast(
                "Product data exported."
            );

        }
    );


    /* =====================================================
       CSV HELPER
    ====================================================== */

    function downloadCSV(
        rows,
        filename
    ){

        let csv = "";


        rows.forEach(
            function(row){

                csv += row
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

    updateTrend();

});