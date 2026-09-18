document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO ORDERS PAGE
    ========================================================= */

    const orders = [
        {
            id:"OZZO1028",
            customer:"Aarav Mehta",
            email:"aarav.mehta@gmail.com",
            product:"Classic Oversized Shirt",
            category:"Fashion",
            items:"2 items",
            total:"₹2,099",
            payment:"Paid",
            status:"Delivered",
            date:"18 Sep 2026",
            daysAgo:0,
            address:"12 Lake View Road, Jubilee Hills, Hyderabad, Telangana"
        },

        {
            id:"OZZO1027",
            customer:"Priya Sharma",
            email:"priya.sharma@gmail.com",
            product:"Atomic Habits",
            category:"Books",
            items:"1 item",
            total:"₹499",
            payment:"Paid",
            status:"Shipped",
            date:"18 Sep 2026",
            daysAgo:0,
            address:"8 Green Park, Banjara Hills, Hyderabad, Telangana"
        },

        {
            id:"OZZO1026",
            customer:"Rahul Verma",
            email:"rahul.verma@gmail.com",
            product:"Notebook Set",
            category:"Stationery",
            items:"3 items",
            total:"₹899",
            payment:"Paid",
            status:"Processing",
            date:"17 Sep 2026",
            daysAgo:1,
            address:"24 Residency Road, Bengaluru, Karnataka"
        },

        {
            id:"OZZO1025",
            customer:"Sneha Reddy",
            email:"sneha.reddy@gmail.com",
            product:"Ultra Thin Day Pads",
            category:"Pads",
            items:"4 items",
            total:"₹1,299",
            payment:"Paid",
            status:"Delivered",
            date:"16 Sep 2026",
            daysAgo:2,
            address:"5 Hitech City Lane, Madhapur, Hyderabad, Telangana"
        },

        {
            id:"OZZO1024",
            customer:"Vikram Rao",
            email:"vikram.rao@gmail.com",
            product:"Premium Polo T-Shirt",
            category:"Fashion",
            items:"2 items",
            total:"₹1,798",
            payment:"Paid",
            status:"Pending",
            date:"16 Sep 2026",
            daysAgo:2,
            address:"17 Whitefield Main Road, Bengaluru, Karnataka"
        },

        {
            id:"OZZO1023",
            customer:"Ananya Nair",
            email:"ananya.nair@gmail.com",
            product:"The Alchemist",
            category:"Books",
            items:"2 items",
            total:"₹848",
            payment:"Paid",
            status:"Delivered",
            date:"15 Sep 2026",
            daysAgo:3,
            address:"44 MG Road, Kochi, Kerala"
        },

        {
            id:"OZZO1022",
            customer:"Karan Singh",
            email:"karan.singh@gmail.com",
            product:"Gel Pen Set (Pack of 6)",
            category:"Stationery",
            items:"5 items",
            total:"₹1,245",
            payment:"Unpaid",
            status:"Cancelled",
            date:"14 Sep 2026",
            daysAgo:4,
            address:"71 Sector 22, Noida, Uttar Pradesh"
        },

        {
            id:"OZZO1021",
            customer:"Meera Kapoor",
            email:"meera.kapoor@gmail.com",
            product:"Elegant Rose Silk Saree",
            category:"Fashion",
            items:"1 item",
            total:"₹1,499",
            payment:"Paid",
            status:"Processing",
            date:"13 Sep 2026",
            daysAgo:5,
            address:"29 Park Street, Kolkata, West Bengal"
        },

        {
            id:"OZZO1020",
            customer:"Arjun Patel",
            email:"arjun.patel@gmail.com",
            product:"Think Like a Monk",
            category:"Books",
            items:"1 item",
            total:"₹449",
            payment:"Paid",
            status:"Delivered",
            date:"12 Sep 2026",
            daysAgo:6,
            address:"18 Satellite Road, Ahmedabad, Gujarat"
        },

        {
            id:"OZZO1019",
            customer:"Ishita Joshi",
            email:"ishita.joshi@gmail.com",
            product:"Classic Green Saree",
            category:"Fashion",
            items:"1 item",
            total:"₹1,699",
            payment:"Paid",
            status:"Shipped",
            date:"10 Sep 2026",
            daysAgo:8,
            address:"9 FC Road, Pune, Maharashtra"
        }
    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const ordersBody =
        document.getElementById("ordersBody");

    const globalSearch =
        document.getElementById("orderSearch");

    const tableSearch =
        document.getElementById("tableSearch");

    const statusFilter =
        document.getElementById("statusFilter");

    const categoryFilter =
        document.getElementById("categoryFilter");

    const dateFilter =
        document.getElementById("dateFilter");

    const clearFilters =
        document.getElementById("clearFilters");

    const selectAll =
        document.getElementById("selectAll");

    const resultLabel =
        document.getElementById("resultLabel");

    const selectionLabel =
        document.getElementById("selectionLabel");

    const footerResult =
        document.getElementById("footerResult");

    const currentPage =
        document.getElementById("currentPage");

    const prevPage =
        document.getElementById("prevPage");

    const nextPage =
        document.getElementById("nextPage");

    const emptyState =
        document.getElementById("emptyState");

    const toast =
        document.getElementById("adminToast");

    const sidebar =
        document.getElementById("adminSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const menuBtn =
        document.getElementById("mobileMenuBtn");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const mobileNotificationBtn =
        document.getElementById("mobileNotificationBtn");

    const closeNotifications =
        document.getElementById("closeNotifications");


    let filteredOrders = [...orders];

    let currentPageNumber = 1;

    const pageSize = 7;


    /* =========================================================
       HELPERS
    ========================================================= */

    const showToast = (message) => {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(showToast.timer);

        showToast.timer =
            setTimeout(
                () => toast.classList.remove("show"),
                2200
            );

    };


    const statusClass = (status) =>
        status.toLowerCase();


    const escapeHtml = (value) =>
        String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");


    const getSearchValue = () => {

        const values = [];

        if (globalSearch?.value.trim()) {
            values.push(
                globalSearch.value.trim()
            );
        }

        if (tableSearch?.value.trim()) {
            values.push(
                tableSearch.value.trim()
            );
        }

        return values.join(" ").toLowerCase();

    };


    /* =========================================================
       COUNTERS
    ========================================================= */

    const updateCounters = () => {

        const pending =
            orders.filter(
                order =>
                    order.status === "Pending"
            ).length;


        const processing =
            orders.filter(
                order =>
                    order.status === "Processing"
            ).length;


        const delivered = 1274;


        document.getElementById(
            "totalOrdersCount"
        ).textContent = "1,486";


        document.getElementById(
            "pendingCount"
        ).textContent = pending;


        document.getElementById(
            "processingCount"
        ).textContent = processing;


        document.getElementById(
            "deliveredCount"
        ).textContent =
            delivered.toLocaleString("en-IN");

    };


    /* =========================================================
       FILTERING
    ========================================================= */

    const applyFilters = () => {

        const q =
            getSearchValue();

        const status =
            statusFilter.value;

        const category =
            categoryFilter.value;

        const date =
            dateFilter.value;


        filteredOrders =
            orders.filter(order => {

                const text =
                    `
                    ${order.id}
                    ${order.customer}
                    ${order.email}
                    ${order.product}
                    ${order.category}
                    `.toLowerCase();


                const searchMatch =
                    !q ||
                    q
                        .split(/\s+/)
                        .every(token =>
                            text.includes(token)
                        );


                const statusMatch =
                    status === "all" ||
                    order.status === status;


                const categoryMatch =
                    category === "all" ||
                    order.category === category;


                const dateMatch =
                    date === "all" ||
                    (
                        date === "today" &&
                        order.daysAgo === 0
                    ) ||
                    (
                        date !== "today" &&
                        Number(date) >=
                        order.daysAgo
                    );


                return (
                    searchMatch &&
                    statusMatch &&
                    categoryMatch &&
                    dateMatch
                );

            });


        currentPageNumber = 1;

        renderOrders();

    };


    /* =========================================================
       RENDER ORDERS
    ========================================================= */

    const renderOrders = () => {

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredOrders.length /
                    pageSize
                )
            );


        if (
            currentPageNumber >
            totalPages
        ) {
            currentPageNumber =
                totalPages;
        }


        const start =
            (currentPageNumber - 1) *
            pageSize;


        const pageRows =
            filteredOrders.slice(
                start,
                start + pageSize
            );


        ordersBody.innerHTML =
            pageRows
                .map(order => `

                    <tr>

                        <td class="check-cell">

                            <input
                                class="row-check"
                                type="checkbox"
                                value="${escapeHtml(order.id)}"
                                aria-label="Select ${escapeHtml(order.id)}"
                            >

                        </td>


                        <td class="order-id-cell">

                            <strong>
                                #${escapeHtml(order.id)}
                            </strong>

                        </td>


                        <td>

                            <span class="customer-main">
                                ${escapeHtml(order.customer)}
                            </span>

                            <span class="customer-sub">
                                ${escapeHtml(order.email)}
                            </span>

                        </td>


                        <td>

                            <span class="product-main">
                                ${escapeHtml(order.product)}
                            </span>

                            <span class="product-sub">
                                ${escapeHtml(order.items)}
                                ·
                                ${escapeHtml(order.category)}
                            </span>

                        </td>


                        <td class="order-total">
                            ${escapeHtml(order.total)}
                        </td>


                        <td>

                            <span
                                class="payment-state ${
                                    order.payment === "Unpaid"
                                        ? "unpaid"
                                        : ""
                                }"
                            >

                                <span class="payment-dot"></span>

                                ${escapeHtml(
                                    order.payment
                                )}

                            </span>

                        </td>


                        <td>

                            <span
                                class="order-status-pill ${statusClass(order.status)}"
                            >
                                ${escapeHtml(order.status)}
                            </span>

                        </td>


                        <td>
                            ${escapeHtml(order.date)}
                        </td>


                        <td>

                            <button
                                class="order-view-btn view-order"
                                type="button"
                                data-id="${escapeHtml(order.id)}"
                            >

                                <i class="fa-regular fa-eye"></i>

                                View

                            </button>

                        </td>

                    </tr>

                `)
                .join("");


        const hasRows =
            pageRows.length > 0;


        emptyState.classList.toggle(
            "d-none",
            hasRows
        );


        document
            .getElementById("ordersTable")
            .classList.toggle(
                "d-none",
                !hasRows
            );


        resultLabel.textContent =
            `${filteredOrders.length} order${
                filteredOrders.length === 1
                    ? ""
                    : "s"
            } found`;


        const from =
            hasRows
                ? start + 1
                : 0;


        const to =
            Math.min(
                start + pageSize,
                filteredOrders.length
            );


        footerResult.textContent =
            `Showing ${from}–${to} of ${filteredOrders.length} orders`;


        currentPage.textContent =
            currentPageNumber;


        prevPage.disabled =
            currentPageNumber <= 1;


        nextPage.disabled =
            currentPageNumber >=
            totalPages;


        selectAll.checked = false;


        updateSelection();

    };


    /* =========================================================
       SELECTION
    ========================================================= */

    const getSelectedIds = () =>
        [
            ...document.querySelectorAll(
                ".row-check:checked"
            )
        ]
        .map(
            checkbox =>
                checkbox.value
        );


    const updateSelection = () => {

        const selected =
            getSelectedIds().length;


        selectionLabel.textContent =
            `${selected} selected`;

    };


    selectAll.addEventListener(
        "change",
        () => {

            document
                .querySelectorAll(
                    ".row-check"
                )
                .forEach(
                    checkbox => {
                        checkbox.checked =
                            selectAll.checked;
                    }
                );


            updateSelection();

        }
    );


    ordersBody.addEventListener(
        "change",
        event => {

            if (
                !event.target.classList
                    .contains("row-check")
            ) {
                return;
            }


            const boxes =
                [
                    ...document.querySelectorAll(
                        ".row-check"
                    )
                ];


            const checked =
                boxes.filter(
                    checkbox =>
                        checkbox.checked
                ).length;


            selectAll.checked =
                boxes.length > 0 &&
                checked === boxes.length;


            updateSelection();

        }
    );


    /* =========================================================
       VIEW ORDER
    ========================================================= */

    ordersBody.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-order"
                );


            if (!button) return;


            const order =
                orders.find(
                    item =>
                        item.id ===
                        button.dataset.id
                );


            if (!order) return;


            document.getElementById(
                "modalOrderId"
            ).textContent =
                `#${order.id}`;


            document.getElementById(
                "modalCustomer"
            ).textContent =
                order.customer;


            document.getElementById(
                "modalDate"
            ).textContent =
                order.date;


            document.getElementById(
                "modalPayment"
            ).textContent =
                order.payment;


            document.getElementById(
                "modalStatus"
            ).textContent =
                order.status;


            document.getElementById(
                "modalItemsCount"
            ).textContent =
                order.items;


            document.getElementById(
                "modalProduct"
            ).textContent =
                order.product;


            document.getElementById(
                "modalCategory"
            ).textContent =
                order.category;


            document.getElementById(
                "modalTotal"
            ).textContent =
                order.total;


            document.getElementById(
                "modalAddress"
            ).textContent =
                order.address;


            bootstrap.Modal
                .getOrCreateInstance(
                    document.getElementById(
                        "orderModal"
                    )
                )
                .show();

        }
    );


    /* =========================================================
       FILTER EVENTS
    ========================================================= */

    [
        globalSearch,
        tableSearch
    ].forEach(input => {

        input?.addEventListener(
            "input",
            () => {

                if (
                    globalSearch &&
                    tableSearch
                ) {

                    if (
                        input === globalSearch
                    ) {

                        tableSearch.value =
                            globalSearch.value;

                    }


                    if (
                        input === tableSearch
                    ) {

                        globalSearch.value =
                            tableSearch.value;

                    }

                }


                applyFilters();

            }
        );

    });


    statusFilter.addEventListener(
        "change",
        applyFilters
    );


    categoryFilter.addEventListener(
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

    clearFilters.addEventListener(
        "click",
        () => {

            globalSearch.value = "";

            tableSearch.value = "";

            statusFilter.value = "all";

            categoryFilter.value = "all";

            dateFilter.value = "all";


            applyFilters();


            showToast(
                "Order filters cleared."
            );

        }
    );


    /* =========================================================
       PAGINATION
    ========================================================= */

    prevPage.addEventListener(
        "click",
        () => {

            if (
                currentPageNumber <= 1
            ) {
                return;
            }


            currentPageNumber--;

            renderOrders();

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        filteredOrders.length /
                        pageSize
                    )
                );


            if (
                currentPageNumber >=
                totalPages
            ) {
                return;
            }


            currentPageNumber++;

            renderOrders();

        }
    );


    /* =========================================================
       EXPORT CSV
    ========================================================= */

    document
        .getElementById("exportBtn")
        .addEventListener(
            "click",
            () => {

                const headers = [
                    "Order",
                    "Customer",
                    "Email",
                    "Product",
                    "Category",
                    "Items",
                    "Total",
                    "Payment",
                    "Status",
                    "Date"
                ];


                const rows =
                    filteredOrders.map(
                        order => [
                            order.id,
                            order.customer,
                            order.email,
                            order.product,
                            order.category,
                            order.items,
                            order.total,
                            order.payment,
                            order.status,
                            order.date
                        ]
                    );


                const csv =
                    [
                        headers,
                        ...rows
                    ]
                    .map(
                        row =>
                            row
                                .map(
                                    value =>
                                        `"${String(value)
                                            .replaceAll(
                                                '"',
                                                '""'
                                            )}"`
                                )
                                .join(",")
                    )
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


                link.href = url;

                link.download =
                    "ozzo-orders.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Orders exported successfully."
                );

            }
        );


    /* =========================================================
       BULK ACTIONS
    ========================================================= */

    document
        .getElementById(
            "markProcessingBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelectedIds();


                if (!selected.length) {

                    showToast(
                        "Select at least one order first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} order${
                        selected.length === 1
                            ? ""
                            : "s"
                    } marked for processing.`
                );

            }
        );


    document
        .getElementById(
            "cancelSelectedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelectedIds();


                if (!selected.length) {

                    showToast(
                        "Select at least one order first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} selected order${
                        selected.length === 1
                            ? ""
                            : "s"
                    } ready for cancellation.`
                );

            }
        );


    /* =========================================================
       PRINT
    ========================================================= */

    document
        .getElementById(
            "printOrderBtn"
        )
        .addEventListener(
            "click",
            () => window.print()
        );


    /* =========================================================
       SIDEBAR
       SAME BEHAVIOR AS INDEX.HTML
    ========================================================= */

    const toggleSidebar = force => {

        const open =
            typeof force === "boolean"
                ? force
                : !sidebar.classList.contains(
                    "show"
                );


        sidebar.classList.toggle(
            "show",
            open
        );


        overlay.classList.toggle(
            "show",
            open
        );

    };


    menuBtn?.addEventListener(
        "click",
        () => toggleSidebar()
    );


    overlay?.addEventListener(
        "click",
        () =>
            toggleSidebar(false)
    );


    document
        .querySelectorAll(
            ".admin-nav-link"
        )
        .forEach(link => {

            if (
                link.id ===
                "logoutBtn"
            ) {
                return;
            }


            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute(
                            "href"
                        ) || "";


                    const section =
                        link.dataset.section;


                    if (
                        section &&
                        section !== "orders" &&
                        href.startsWith("#")
                    ) {

                        event.preventDefault();


                        showToast(
                            `${
                                link
                                    .querySelector(
                                        "span"
                                    )
                                    ?.textContent
                                    .trim()
                                || "Module"
                            } module is ready to connect.`
                        );


                        if (
                            window.innerWidth <
                            992
                        ) {

                            toggleSidebar(
                                false
                            );

                        }

                    }

                }
            );

        });


    document
        .getElementById(
            "logoutBtn"
        )
        ?.addEventListener(
            "click",
            () => {

                showToast(
                    "Logout flow is ready to connect."
                );

            }
        );


    /* =========================================================
       NOTIFICATIONS
    ========================================================= */

    const toggleNotifications =
        event => {

            event?.stopPropagation();


            notificationPanel
                ?.classList
                .toggle(
                    "show"
                );

        };


    notificationBtn
        ?.addEventListener(
            "click",
            toggleNotifications
        );


    mobileNotificationBtn
        ?.addEventListener(
            "click",
            toggleNotifications
        );


    closeNotifications
        ?.addEventListener(
            "click",
            () => {

                notificationPanel
                    ?.classList
                    .remove(
                        "show"
                    );

            }
        );


    document.addEventListener(
        "click",
        event => {

            if (
                !notificationPanel
            ) {
                return;
            }


            if (
                !notificationPanel.contains(
                    event.target
                ) &&
                !notificationBtn?.contains(
                    event.target
                ) &&
                !mobileNotificationBtn?.contains(
                    event.target
                )
            ) {

                notificationPanel
                    .classList
                    .remove(
                        "show"
                    );

            }

        }
    );


    /* =========================================================
       CURRENT DATE
    ========================================================= */

    const now = new Date();


    const currentDate =
        document.getElementById(
            "currentDate"
        );


    if (currentDate) {

        currentDate.textContent =
            now.toLocaleDateString(
                "en-IN",
                {
                    month:"long",
                    year:"numeric"
                }
            );

    }


    /* =========================================================
       ESC KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }


            toggleSidebar(false);


            notificationPanel
                ?.classList
                .remove(
                    "show"
                );

        }
    );


    /* =========================================================
       RESIZE
    ========================================================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth >=
                992
            ) {

                toggleSidebar(false);

            }

        }
    );


    /* =========================================================
       INITIALIZE
    ========================================================= */

    updateCounters();

    renderOrders();

});