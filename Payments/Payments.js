document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO PAYMENTS DATA
    ========================================================= */

    const payments = [

        {
            id:"TXN90881",
            order:"OZZO1028",
            customer:"Aarav Mehta",
            email:"aarav.mehta@gmail.com",
            method:"UPI",
            methodRef:"Google Pay",
            amount:"₹2,099",
            status:"Success",
            date:"18 Sep 2026",
            daysAgo:0,
            gateway:"Razorpay",
            reference:"pay_RZP90881"
        },

        {
            id:"TXN90880",
            order:"OZZO1027",
            customer:"Priya Sharma",
            email:"priya.sharma@gmail.com",
            method:"Card",
            methodRef:"Visa •••• 4812",
            amount:"₹499",
            status:"Success",
            date:"18 Sep 2026",
            daysAgo:0,
            gateway:"Razorpay",
            reference:"pay_RZP90880"
        },

        {
            id:"TXN90879",
            order:"OZZO1026",
            customer:"Rahul Verma",
            email:"rahul.verma@gmail.com",
            method:"UPI",
            methodRef:"PhonePe",
            amount:"₹899",
            status:"Pending",
            date:"17 Sep 2026",
            daysAgo:1,
            gateway:"Cashfree",
            reference:"pay_CF90879"
        },

        {
            id:"TXN90878",
            order:"OZZO1025",
            customer:"Sneha Reddy",
            email:"sneha.reddy@gmail.com",
            method:"Card",
            methodRef:"Mastercard •••• 2145",
            amount:"₹1,299",
            status:"Success",
            date:"16 Sep 2026",
            daysAgo:2,
            gateway:"Razorpay",
            reference:"pay_RZP90878"
        },

        {
            id:"TXN90877",
            order:"OZZO1024",
            customer:"Vikram Rao",
            email:"vikram.rao@gmail.com",
            method:"Net Banking",
            methodRef:"HDFC Bank",
            amount:"₹1,798",
            status:"Success",
            date:"16 Sep 2026",
            daysAgo:2,
            gateway:"Razorpay",
            reference:"pay_RZP90877"
        },

        {
            id:"TXN90876",
            order:"OZZO1023",
            customer:"Ananya Nair",
            email:"ananya.nair@gmail.com",
            method:"UPI",
            methodRef:"BHIM UPI",
            amount:"₹848",
            status:"Refunded",
            date:"15 Sep 2026",
            daysAgo:3,
            gateway:"Razorpay",
            reference:"rf_RZP90876"
        },

        {
            id:"TXN90875",
            order:"OZZO1022",
            customer:"Karan Singh",
            email:"karan.singh@gmail.com",
            method:"Wallet",
            methodRef:"Paytm Wallet",
            amount:"₹1,245",
            status:"Failed",
            date:"14 Sep 2026",
            daysAgo:4,
            gateway:"Cashfree",
            reference:"fail_CF90875"
        },

        {
            id:"TXN90874",
            order:"OZZO1021",
            customer:"Meera Kapoor",
            email:"meera.kapoor@gmail.com",
            method:"Card",
            methodRef:"Visa •••• 7362",
            amount:"₹1,499",
            status:"Success",
            date:"13 Sep 2026",
            daysAgo:5,
            gateway:"Razorpay",
            reference:"pay_RZP90874"
        },

        {
            id:"TXN90873",
            order:"OZZO1020",
            customer:"Arjun Patel",
            email:"arjun.patel@gmail.com",
            method:"UPI",
            methodRef:"Google Pay",
            amount:"₹449",
            status:"Success",
            date:"12 Sep 2026",
            daysAgo:6,
            gateway:"Razorpay",
            reference:"pay_RZP90873"
        },

        {
            id:"TXN90872",
            order:"OZZO1019",
            customer:"Ishita Joshi",
            email:"ishita.joshi@gmail.com",
            method:"COD",
            methodRef:"Cash on Delivery",
            amount:"₹1,699",
            status:"Success",
            date:"10 Sep 2026",
            daysAgo:8,
            gateway:"OZZO COD",
            reference:"cod_90872"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const paymentsBody =
        document.getElementById("paymentsBody");

    const globalSearch =
        document.getElementById("paymentSearch");

    const tableSearch =
        document.getElementById("tableSearch");

    const statusFilter =
        document.getElementById("paymentStatus");

    const methodFilter =
        document.getElementById("paymentMethod");

    const dateFilter =
        document.getElementById("paymentDate");

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


    let filteredPayments =
        [...payments];

    let currentPageNumber = 1;

    const pageSize = 7;


    /* =========================================================
       TOAST
    ========================================================= */

    const showToast = (message) => {

        if (!toast) return;

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(showToast.timer);

        showToast.timer =
            setTimeout(
                () => {
                    toast.classList.remove("show");
                },
                2200
            );

    };


    /* =========================================================
       ESCAPE HTML
    ========================================================= */

    const escapeHtml = (value) => {

        return String(value)

            .replaceAll(
                "&",
                "&amp;"
            )

            .replaceAll(
                "<",
                "&lt;"
            )

            .replaceAll(
                ">",
                "&gt;"
            )

            .replaceAll(
                '"',
                "&quot;"
            )

            .replaceAll(
                "'",
                "&#039;"
            );

    };


    /* =========================================================
       STATUS CLASS
    ========================================================= */

    const statusClass = (status) =>
        status.toLowerCase();


    /* =========================================================
       SEARCH QUERY
    ========================================================= */

    const getQuery = () => {

        const first =
            globalSearch?.value.trim()
            || "";

        const second =
            tableSearch?.value.trim()
            || "";

        return `${first} ${second}`
            .trim()
            .toLowerCase();

    };


    /* =========================================================
       FILTER PAYMENTS
    ========================================================= */

    const applyFilters = () => {

        const q =
            getQuery();

        const status =
            statusFilter.value;

        const method =
            methodFilter.value;

        const date =
            dateFilter.value;


        filteredPayments =
            payments.filter(
                payment => {

                    const text = `
                        ${payment.id}
                        ${payment.order}
                        ${payment.customer}
                        ${payment.email}
                        ${payment.method}
                        ${payment.methodRef}
                        ${payment.reference}
                    `.toLowerCase();


                    const searchMatch =
                        !q ||
                        q
                            .split(/\s+/)
                            .every(
                                token =>
                                    text.includes(
                                        token
                                    )
                            );


                    const statusMatch =
                        status === "all" ||
                        payment.status ===
                            status;


                    const methodMatch =
                        method === "all" ||
                        payment.method ===
                            method;


                    const dateMatch =
                        date === "all" ||

                        (
                            date === "today" &&
                            payment.daysAgo === 0
                        ) ||

                        (
                            date !== "today" &&
                            Number(date) >=
                                payment.daysAgo
                        );


                    return (
                        searchMatch &&
                        statusMatch &&
                        methodMatch &&
                        dateMatch
                    );

                }
            );


        currentPageNumber = 1;

        renderPayments();

    };


    /* =========================================================
       RENDER PAYMENTS
    ========================================================= */

    const renderPayments = () => {

        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredPayments.length /
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


        const rows =
            filteredPayments.slice(
                start,
                start + pageSize
            );


        paymentsBody.innerHTML =
            rows
                .map(
                    payment => `

                    <tr>

                        <td>

                            <input
                                class="row-check"
                                type="checkbox"
                                value="${escapeHtml(payment.id)}"
                                aria-label="Select ${escapeHtml(payment.id)}"
                            >

                        </td>


                        <td class="transaction-id">
                            #${escapeHtml(payment.id)}
                        </td>


                        <td class="order-ref">
                            #${escapeHtml(payment.order)}
                        </td>


                        <td>

                            <span class="customer-main">
                                ${escapeHtml(payment.customer)}
                            </span>

                            <span class="customer-sub">
                                ${escapeHtml(payment.email)}
                            </span>

                        </td>


                        <td>

                            <span class="method-main">
                                ${escapeHtml(payment.method)}
                            </span>

                            <span class="method-sub">
                                ${escapeHtml(payment.methodRef)}
                            </span>

                        </td>


                        <td class="amount-cell">
                            ${escapeHtml(payment.amount)}
                        </td>


                        <td>

                            <span
                                class="payment-status-pill ${statusClass(payment.status)}"
                            >
                                ${escapeHtml(payment.status)}
                            </span>

                        </td>


                        <td>
                            ${escapeHtml(payment.date)}
                        </td>


                        <td>

                            <button
                                class="payment-view-btn view-payment"
                                type="button"
                                data-id="${escapeHtml(payment.id)}"
                            >

                                <i class="fa-regular fa-eye"></i>

                                View

                            </button>

                        </td>

                    </tr>

                `
                )
                .join("");


        const hasRows =
            rows.length > 0;


        emptyState.classList.toggle(
            "d-none",
            hasRows
        );


        document
            .getElementById(
                "paymentsTable"
            )
            .classList.toggle(
                "d-none",
                !hasRows
            );


        resultLabel.textContent =
            `${filteredPayments.length} transaction${
                filteredPayments.length === 1
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
                filteredPayments.length
            );


        footerResult.textContent =
            `Showing ${from}–${to} of ${filteredPayments.length} transactions`;


        currentPage.textContent =
            currentPageNumber;


        prevPage.disabled =
            currentPageNumber <= 1;


        nextPage.disabled =
            currentPageNumber >=
            totalPages;


        selectAll.checked =
            false;


        updateSelection();

    };


    /* =========================================================
       SELECTED PAYMENTS
    ========================================================= */

    const getSelectedIds = () => {

        return [
            ...document.querySelectorAll(
                ".row-check:checked"
            )
        ]
        .map(
            checkbox =>
                checkbox.value
        );

    };


    const updateSelection = () => {

        const count =
            getSelectedIds().length;


        selectionLabel.textContent =
            `${count} selected`;

    };


    /* =========================================================
       SEARCH EVENTS
    ========================================================= */

    [
        globalSearch,
        tableSearch

    ].forEach(
        input => {

            input?.addEventListener(
                "input",
                () => {

                    if (
                        input ===
                        globalSearch &&
                        tableSearch
                    ) {

                        tableSearch.value =
                            globalSearch.value;

                    }


                    if (
                        input ===
                        tableSearch &&
                        globalSearch
                    ) {

                        globalSearch.value =
                            tableSearch.value;

                    }


                    applyFilters();

                }
            );

        }
    );


    /* =========================================================
       FILTER EVENTS
    ========================================================= */

    [
        statusFilter,
        methodFilter,
        dateFilter

    ].forEach(
        filter => {

            filter.addEventListener(
                "change",
                applyFilters
            );

        }
    );


    /* =========================================================
       CLEAR FILTERS
    ========================================================= */

    clearFilters.addEventListener(
        "click",
        () => {

            globalSearch.value = "";

            tableSearch.value = "";

            statusFilter.value =
                "all";

            methodFilter.value =
                "all";

            dateFilter.value =
                "all";


            applyFilters();


            showToast(
                "Payment filters cleared."
            );

        }
    );


    /* =========================================================
       SELECT ALL
    ========================================================= */

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


    /* =========================================================
       INDIVIDUAL SELECTION
    ========================================================= */

    paymentsBody.addEventListener(
        "change",
        event => {

            if (
                !event.target.classList
                    .contains(
                        "row-check"
                    )
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
       VIEW PAYMENT DETAILS
    ========================================================= */

    paymentsBody.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-payment"
                );


            if (!button) return;


            const payment =
                payments.find(
                    item =>
                        item.id ===
                        button.dataset.id
                );


            if (!payment) return;


            document.getElementById(
                "modalTransactionId"
            ).textContent =
                `#${payment.id}`;


            document.getElementById(
                "modalCustomer"
            ).textContent =
                payment.customer;


            document.getElementById(
                "modalOrder"
            ).textContent =
                `#${payment.order}`;


            document.getElementById(
                "modalMethod"
            ).textContent =
                `${payment.method} · ${payment.methodRef}`;


            document.getElementById(
                "modalStatus"
            ).textContent =
                payment.status;


            document.getElementById(
                "modalAmount"
            ).textContent =
                payment.amount;


            document.getElementById(
                "modalDate"
            ).textContent =
                payment.date;


            document.getElementById(
                "modalGateway"
            ).textContent =
                payment.gateway;


            document.getElementById(
                "modalReference"
            ).textContent =
                payment.reference;


            bootstrap.Modal
                .getOrCreateInstance(
                    document.getElementById(
                        "paymentModal"
                    )
                )
                .show();

        }
    );


    /* =========================================================
       PREVIOUS PAGE
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

            renderPayments();

        }
    );


    /* =========================================================
       NEXT PAGE
    ========================================================= */

    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        filteredPayments.length /
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

            renderPayments();

        }
    );


    /* =========================================================
       EXPORT PAYMENTS CSV
    ========================================================= */

    document
        .getElementById(
            "exportBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Transaction",
                    "Order",
                    "Customer",
                    "Email",
                    "Method",
                    "Method Reference",
                    "Amount",
                    "Status",
                    "Date",
                    "Gateway",
                    "Reference"

                ];


                const rows =
                    filteredPayments.map(
                        payment => [

                            payment.id,
                            payment.order,
                            payment.customer,
                            payment.email,
                            payment.method,
                            payment.methodRef,
                            payment.amount,
                            payment.status,
                            payment.date,
                            payment.gateway,
                            payment.reference

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
                    "ozzo-payments.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Payments exported successfully."
                );

            }
        );


    /* =========================================================
       MARK VERIFIED
    ========================================================= */

    document
        .getElementById(
            "markVerifiedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelectedIds();


                if (
                    !selected.length
                ) {

                    showToast(
                        "Select at least one payment first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} payment${
                        selected.length === 1
                            ? ""
                            : "s"
                    } marked as verified.`
                );

            }
        );


    /* =========================================================
       REFUND SELECTED
    ========================================================= */

    document
        .getElementById(
            "refundSelectedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelectedIds();


                if (
                    !selected.length
                ) {

                    showToast(
                        "Select at least one payment first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} payment${
                        selected.length === 1
                            ? ""
                            : "s"
                    } ready for refund.`
                );

            }
        );


    /* =========================================================
       PRINT PAYMENT
    ========================================================= */

    document
        .getElementById(
            "printPaymentBtn"
        )
        .addEventListener(
            "click",
            () => {

                window.print();

            }
        );


    /* =========================================================
       SIDEBAR
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
        () =>
            toggleSidebar()
    );


    overlay?.addEventListener(
        "click",
        () =>
            toggleSidebar(false)
    );


    /* =========================================================
       SIDEBAR LINKS
    ========================================================= */

    document
        .querySelectorAll(
            ".admin-nav-link"
        )
        .forEach(
            link => {

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
                            section !== "payments" &&
                            href.startsWith("#")
                        ) {

                            event.preventDefault();


                            const label =
                                link
                                    .querySelector(
                                        "span"
                                    )
                                    ?.textContent
                                    .trim()
                                || "Module";


                            showToast(
                                `${label} module is ready to connect.`
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

            }
        );


    /* =========================================================
       LOGOUT
    ========================================================= */

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

    const currentDate =
        document.getElementById(
            "currentDate"
        );


    if (currentDate) {

        currentDate.textContent =
            new Date()
                .toLocaleDateString(
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
                event.key ===
                "Escape"
            ) {

                toggleSidebar(false);


                notificationPanel
                    ?.classList
                    .remove(
                        "show"
                    );

            }

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

    renderPayments();

});