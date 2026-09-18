document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO RETURNS DATA
    ========================================================= */

    const returns = [

        {
            id:"OZZO-R126",
            order:"OZZO1028",
            customer:"Aarav Mehta",
            email:"aarav.mehta@gmail.com",
            product:"Classic Oversized Shirt",
            category:"Fashion",
            reason:"Size / Fit",
            note:"Customer requested a different size.",
            amount:"₹1,299",
            status:"Pending",
            date:"18 Sep 2026",
            daysAgo:0,
            address:
                "12 Lake View Road, Jubilee Hills, Hyderabad, Telangana"
        },

        {
            id:"OZZO-R125",
            order:"OZZO1027",
            customer:"Priya Sharma",
            email:"priya.sharma@gmail.com",
            product:"Atomic Habits",
            category:"Books",
            reason:"Damaged",
            note:"Book arrived with damaged cover.",
            amount:"₹499",
            status:"Approved",
            date:"18 Sep 2026",
            daysAgo:0,
            address:
                "8 Green Park, Banjara Hills, Hyderabad, Telangana"
        },

        {
            id:"OZZO-R124",
            order:"OZZO1026",
            customer:"Rahul Verma",
            email:"rahul.verma@gmail.com",
            product:"Notebook Set",
            category:"Stationery",
            reason:"Quality Issue",
            note:"Customer reported paper quality issue.",
            amount:"₹899",
            status:"Received",
            date:"17 Sep 2026",
            daysAgo:1,
            address:
                "24 Residency Road, Bengaluru, Karnataka"
        },

        {
            id:"OZZO-R123",
            order:"OZZO1025",
            customer:"Sneha Reddy",
            email:"sneha.reddy@gmail.com",
            product:"Ultra Thin Day Pads",
            category:"Pads",
            reason:"Changed Mind",
            note:"Customer changed their purchase decision.",
            amount:"₹1,299",
            status:"Refunded",
            date:"16 Sep 2026",
            daysAgo:2,
            address:
                "5 Hitech City Lane, Madhapur, Hyderabad, Telangana"
        },

        {
            id:"OZZO-R122",
            order:"OZZO1024",
            customer:"Vikram Rao",
            email:"vikram.rao@gmail.com",
            product:"Premium Polo T-Shirt",
            category:"Fashion",
            reason:"Size / Fit",
            note:"Customer requested a smaller size.",
            amount:"₹899",
            status:"Pending",
            date:"16 Sep 2026",
            daysAgo:2,
            address:
                "17 Whitefield Main Road, Bengaluru, Karnataka"
        },

        {
            id:"OZZO-R121",
            order:"OZZO1023",
            customer:"Ananya Nair",
            email:"ananya.nair@gmail.com",
            product:"The Alchemist",
            category:"Books",
            reason:"Damaged",
            note:"Pages were damaged during delivery.",
            amount:"₹399",
            status:"Approved",
            date:"15 Sep 2026",
            daysAgo:3,
            address:
                "44 MG Road, Kochi, Kerala"
        },

        {
            id:"OZZO-R120",
            order:"OZZO1022",
            customer:"Karan Singh",
            email:"karan.singh@gmail.com",
            product:"Gel Pen Set (Pack of 6)",
            category:"Stationery",
            reason:"Wrong Item",
            note:"Customer received a different pen set.",
            amount:"₹249",
            status:"Rejected",
            date:"14 Sep 2026",
            daysAgo:4,
            address:
                "71 Sector 22, Noida, Uttar Pradesh"
        },

        {
            id:"OZZO-R119",
            order:"OZZO1021",
            customer:"Meera Kapoor",
            email:"meera.kapoor@gmail.com",
            product:"Elegant Rose Silk Saree",
            category:"Fashion",
            reason:"Quality Issue",
            note:"Customer reported stitching quality issue.",
            amount:"₹1,499",
            status:"Received",
            date:"13 Sep 2026",
            daysAgo:5,
            address:
                "29 Park Street, Kolkata, West Bengal"
        },

        {
            id:"OZZO-R118",
            order:"OZZO1020",
            customer:"Arjun Patel",
            email:"arjun.patel@gmail.com",
            product:"Think Like a Monk",
            category:"Books",
            reason:"Damaged",
            note:"Book arrived with torn pages.",
            amount:"₹449",
            status:"Refunded",
            date:"12 Sep 2026",
            daysAgo:6,
            address:
                "18 Satellite Road, Ahmedabad, Gujarat"
        },

        {
            id:"OZZO-R117",
            order:"OZZO1019",
            customer:"Ishita Joshi",
            email:"ishita.joshi@gmail.com",
            product:"Classic Green Saree",
            category:"Fashion",
            reason:"Size / Fit",
            note:"Customer requested a different size.",
            amount:"₹1,699",
            status:"Approved",
            date:"10 Sep 2026",
            daysAgo:8,
            address:
                "9 FC Road, Pune, Maharashtra"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body =
        document.getElementById("returnsBody");

    const globalSearch =
        document.getElementById("returnSearch");

    const tableSearch =
        document.getElementById("tableSearch");

    const statusFilter =
        document.getElementById("returnStatus");

    const reasonFilter =
        document.getElementById("returnReason");

    const dateFilter =
        document.getElementById("returnDate");

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

    const currentPageEl =
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


    /* =========================================================
       STATE
    ========================================================= */

    let filteredReturns =
        [...returns];

    let currentPage =
        1;

    const pageSize =
        7;


    /* =========================================================
       HELPERS
    ========================================================= */

    const escapeHtml =
        value =>
            String(value)
                .replaceAll("&","&amp;")
                .replaceAll("<","&lt;")
                .replaceAll(">","&gt;")
                .replaceAll('"',"&quot;")
                .replaceAll("'","&#039;");


    const showToast =
        message => {

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
                    () => {

                        toast.classList.remove(
                            "show"
                        );

                    },
                    2200
                );

        };


    const getStatusClass =
        status =>
            status.toLowerCase();


    const getSearchQuery =
        () => {

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
       SUMMARY
    ========================================================= */

    const updateSummary =
        () => {

            const pending =
                returns.filter(
                    item =>
                        item.status ===
                        "Pending"
                ).length;


            const received =
                returns.filter(
                    item =>
                        item.status ===
                        "Received"
                ).length;


            document.getElementById(
                "totalReturnsCount"
            ).textContent =
                "126";


            document.getElementById(
                "pendingReturnsCount"
            ).textContent =
                pending;


            document.getElementById(
                "receivedReturnsCount"
            ).textContent =
                received;


            document.getElementById(
                "refundedReturnsCount"
            ).textContent =
                "₹72,480";

        };


    /* =========================================================
       FILTERING
    ========================================================= */

    const applyFilters =
        () => {

            const query =
                getSearchQuery();

            const selectedStatus =
                statusFilter.value;

            const selectedReason =
                reasonFilter.value;

            const selectedDate =
                dateFilter.value;


            filteredReturns =
                returns.filter(
                    item => {

                        const searchable = `
                            ${item.id}
                            ${item.order}
                            ${item.customer}
                            ${item.email}
                            ${item.product}
                            ${item.category}
                            ${item.reason}
                        `.toLowerCase();


                        const searchMatch =
                            !query ||

                            query
                                .split(/\s+/)
                                .every(
                                    token =>
                                        searchable.includes(
                                            token
                                        )
                                );


                        const statusMatch =
                            selectedStatus ===
                                "all" ||

                            item.status ===
                                selectedStatus;


                        const reasonMatch =
                            selectedReason ===
                                "all" ||

                            item.reason ===
                                selectedReason;


                        const dateMatch =
                            selectedDate ===
                                "all"

                            ||

                            (
                                selectedDate ===
                                    "today" &&

                                item.daysAgo ===
                                    0
                            )

                            ||

                            (
                                selectedDate !==
                                    "today" &&

                                Number(
                                    selectedDate
                                ) >=
                                    item.daysAgo
                            );


                        return (
                            searchMatch &&
                            statusMatch &&
                            reasonMatch &&
                            dateMatch
                        );

                    }
                );


            currentPage =
                1;

            render();

        };


    /* =========================================================
       RENDER
    ========================================================= */

    const render =
        () => {

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        filteredReturns.length /
                        pageSize
                    )
                );


            if(
                currentPage >
                totalPages
            ){

                currentPage =
                    totalPages;

            }


            const start =
                (
                    currentPage -
                    1
                ) *
                pageSize;


            const pageRows =
                filteredReturns.slice(
                    start,
                    start + pageSize
                );


            body.innerHTML =
                pageRows

                    .map(
                        item => `

                        <tr>

                            <td>

                                <input
                                    class="row-check"
                                    type="checkbox"
                                    value="${escapeHtml(item.id)}"
                                    aria-label="Select ${escapeHtml(item.id)}"
                                >

                            </td>


                            <td class="return-id-cell">

                                #${escapeHtml(item.id)}

                            </td>


                            <td class="return-order-cell">

                                #${escapeHtml(item.order)}

                            </td>


                            <td>

                                <span
                                    class="return-customer-main"
                                >

                                    ${escapeHtml(
                                        item.customer
                                    )}

                                </span>


                                <span
                                    class="return-customer-sub"
                                >

                                    ${escapeHtml(
                                        item.email
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="return-product-main"
                                >

                                    ${escapeHtml(
                                        item.product
                                    )}

                                </span>


                                <span
                                    class="return-product-sub"
                                >

                                    ${escapeHtml(
                                        item.category
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="return-reason"
                                >

                                    ${escapeHtml(
                                        item.reason
                                    )}

                                </span>


                                <span
                                    class="return-reason-sub"
                                >
                                    Return request
                                </span>

                            </td>


                            <td class="return-order-cell">

                                ${escapeHtml(
                                    item.amount
                                )}

                            </td>


                            <td>

                                <span
                                    class="return-status-pill ${getStatusClass(item.status)}"
                                >

                                    ${escapeHtml(
                                        item.status
                                    )}

                                </span>

                            </td>


                            <td>

                                ${escapeHtml(
                                    item.date
                                )}

                            </td>


                            <td>

                                <button
                                    class="return-view-btn view-return"
                                    type="button"
                                    data-id="${escapeHtml(item.id)}"
                                >

                                    <i
                                        class="fa-regular fa-eye"
                                    ></i>

                                    View

                                </button>

                            </td>

                        </tr>

                    `
                    )
                    .join("");


            const hasRows =
                pageRows.length >
                0;


            emptyState.classList.toggle(
                "d-none",
                hasRows
            );


            document
                .getElementById("returnsTable")
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredReturns.length} return${
                    filteredReturns.length === 1
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
                    filteredReturns.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredReturns.length} returns`;


            currentPageEl.textContent =
                currentPage;


            prevPage.disabled =
                currentPage <= 1;


            nextPage.disabled =
                currentPage >= totalPages;


            selectAll.checked =
                false;


            updateSelection();

        };


    /* =========================================================
       SELECTION
    ========================================================= */

    const getSelected =
        () =>

            [
                ...document.querySelectorAll(
                    ".row-check:checked"
                )
            ]

                .map(
                    checkbox =>
                        checkbox.value
                );


    const updateSelection =
        () => {

            const count =
                getSelected().length;


            selectionLabel.textContent =
                `${count} selected`;

        };


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
       INDIVIDUAL CHECKBOX
    ========================================================= */

    body.addEventListener(
        "change",
        event => {

            if(
                !event.target.classList.contains(
                    "row-check"
                )
            ){

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
                boxes.length >
                    0 &&

                checked ===
                    boxes.length;


            updateSelection();

        }
    );


    /* =========================================================
       RETURN DETAILS
    ========================================================= */

    body.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-return"
                );


            if(!button){
                return;
            }


            const item =
                returns.find(
                    returnItem =>
                        returnItem.id ===
                        button.dataset.id
                );


            if(!item){
                return;
            }


            document.getElementById(
                "modalReturnId"
            ).textContent =
                `#${item.id}`;


            document.getElementById(
                "modalCustomer"
            ).textContent =
                item.customer;


            document.getElementById(
                "modalOrder"
            ).textContent =
                `#${item.order}`;


            document.getElementById(
                "modalStatus"
            ).textContent =
                item.status;


            document.getElementById(
                "modalAmount"
            ).textContent =
                item.amount;


            document.getElementById(
                "modalDate"
            ).textContent =
                item.date;


            document.getElementById(
                "modalProduct"
            ).textContent =
                item.product;


            document.getElementById(
                "modalCategory"
            ).textContent =
                item.category;


            document.getElementById(
                "modalReason"
            ).textContent =
                item.reason;


            document.getElementById(
                "modalNote"
            ).textContent =
                item.note;


            document.getElementById(
                "modalAddress"
            ).textContent =
                item.address;


            bootstrap.Modal
                .getOrCreateInstance(
                    document.getElementById(
                        "returnModal"
                    )
                )
                .show();

        }
    );


    /* =========================================================
       SEARCH
    ========================================================= */

    [
        globalSearch,
        tableSearch
    ]
    .forEach(
        input => {

            input?.addEventListener(
                "input",
                () => {

                    if(
                        input ===
                        globalSearch
                    ){

                        tableSearch.value =
                            globalSearch.value;

                    }


                    if(
                        input ===
                        tableSearch
                    ){

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

    statusFilter.addEventListener(
        "change",
        applyFilters
    );


    reasonFilter.addEventListener(
        "change",
        applyFilters
    );


    dateFilter.addEventListener(
        "change",
        applyFilters
    );


    /* =========================================================
       CLEAR
    ========================================================= */

    clearFilters.addEventListener(
        "click",
        () => {

            globalSearch.value = "";

            tableSearch.value = "";

            statusFilter.value =
                "all";

            reasonFilter.value =
                "all";

            dateFilter.value =
                "all";


            applyFilters();


            showToast(
                "Return filters cleared."
            );

        }
    );


    /* =========================================================
       PAGINATION
    ========================================================= */

    prevPage.addEventListener(
        "click",
        () => {

            if(
                currentPage <=
                1
            ){

                return;

            }


            currentPage--;

            render();

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        filteredReturns.length /
                        pageSize
                    )
                );


            if(
                currentPage >=
                totalPages
            ){

                return;

            }


            currentPage++;

            render();

        }
    );


    /* =========================================================
       APPROVE
    ========================================================= */

    document
        .getElementById(
            "approveSelectedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelected();


                if(
                    !selected.length
                ){

                    showToast(
                        "Select at least one return first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} return${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } approved.`
                );

            }
        );


    /* =========================================================
       REFUND
    ========================================================= */

    document
        .getElementById(
            "refundSelectedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelected();


                if(
                    !selected.length
                ){

                    showToast(
                        "Select at least one return first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} refund${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready to process.`
                );

            }
        );


    /* =========================================================
       REJECT
    ========================================================= */

    document
        .getElementById(
            "rejectSelectedBtn"
        )
        .addEventListener(
            "click",
            () => {

                const selected =
                    getSelected();


                if(
                    !selected.length
                ){

                    showToast(
                        "Select at least one return first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} return${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready for rejection.`
                );

            }
        );


    /* =========================================================
       EXPORT CSV
    ========================================================= */

    document
        .getElementById(
            "exportReturnsBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Return ID",
                    "Order",
                    "Customer",
                    "Email",
                    "Product",
                    "Category",
                    "Reason",
                    "Amount",
                    "Status",
                    "Date"

                ];


                const rows =
                    filteredReturns.map(
                        item => [

                            item.id,
                            item.order,
                            item.customer,
                            item.email,
                            item.product,
                            item.category,
                            item.reason,
                            item.amount,
                            item.status,
                            item.date

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


                link.href =
                    url;


                link.download =
                    "ozzo-returns.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Returns exported successfully."
                );

            }
        );


    /* =========================================================
       PRINT
    ========================================================= */

    document
        .getElementById(
            "printReturnBtn"
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

    const toggleSidebar =
        force => {

            const open =
                typeof force ===
                "boolean"

                    ? force

                    : !sidebar
                        .classList
                        .contains(
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
        () => {

            toggleSidebar();

        }
    );


    overlay?.addEventListener(
        "click",
        () => {

            toggleSidebar(false);

        }
    );


    /* =========================================================
       OTHER MODULES
    ========================================================= */

    document
        .querySelectorAll(
            ".admin-nav-link[data-section]"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

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


                        if(
                            window.innerWidth <
                            992
                        ){

                            toggleSidebar(
                                false
                            );

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

            if(
                !notificationPanel
            ){

                return;

            }


            if(

                !notificationPanel.contains(
                    event.target
                )

                &&

                !notificationBtn?.contains(
                    event.target
                )

                &&

                !mobileNotificationBtn?.contains(
                    event.target
                )

            ){

                notificationPanel
                    .classList
                    .remove(
                        "show"
                    );

            }

        }
    );


    /* =========================================================
       ESC
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if(
                event.key !==
                "Escape"
            ){

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

            if(
                window.innerWidth >=
                992
            ){

                toggleSidebar(
                    false
                );

            }

        }
    );


    /* =========================================================
       INITIALIZE
    ========================================================= */

    updateSummary();

    render();

});