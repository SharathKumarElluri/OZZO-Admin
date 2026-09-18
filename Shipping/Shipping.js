document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO SHIPPING DATA
    ========================================================= */

    const shipments = [

        {
            id:"SHP90881",
            order:"OZZO1028",
            customer:"Aarav Mehta",
            email:"aarav.mehta@gmail.com",
            courier:"Delhivery",
            tracking:"DEL12390881",
            status:"In Transit",
            expected:"20 Sep 2026",
            daysAgo:0,
            address:"12 Lake View Road, Jubilee Hills, Hyderabad, Telangana"
        },

        {
            id:"SHP90880",
            order:"OZZO1027",
            customer:"Priya Sharma",
            email:"priya.sharma@gmail.com",
            courier:"Blue Dart",
            tracking:"BD48129080",
            status:"Out for Delivery",
            expected:"18 Sep 2026",
            daysAgo:0,
            address:"8 Green Park, Banjara Hills, Hyderabad, Telangana"
        },

        {
            id:"SHP90879",
            order:"OZZO1026",
            customer:"Rahul Verma",
            email:"rahul.verma@gmail.com",
            courier:"DTDC",
            tracking:"DTC78219079",
            status:"Pending Pickup",
            expected:"19 Sep 2026",
            daysAgo:1,
            address:"24 Residency Road, Bengaluru, Karnataka"
        },

        {
            id:"SHP90878",
            order:"OZZO1025",
            customer:"Sneha Reddy",
            email:"sneha.reddy@gmail.com",
            courier:"Ecom Express",
            tracking:"ECX65129078",
            status:"Delivered",
            expected:"17 Sep 2026",
            daysAgo:2,
            address:"5 Hitech City Lane, Madhapur, Hyderabad, Telangana"
        },

        {
            id:"SHP90877",
            order:"OZZO1024",
            customer:"Vikram Rao",
            email:"vikram.rao@gmail.com",
            courier:"Delhivery",
            tracking:"DEL74219077",
            status:"Delayed",
            expected:"18 Sep 2026",
            daysAgo:2,
            address:"17 Whitefield Main Road, Bengaluru, Karnataka"
        },

        {
            id:"SHP90876",
            order:"OZZO1023",
            customer:"Ananya Nair",
            email:"ananya.nair@gmail.com",
            courier:"Blue Dart",
            tracking:"BD56219076",
            status:"Delivered",
            expected:"16 Sep 2026",
            daysAgo:3,
            address:"44 MG Road, Kochi, Kerala"
        },

        {
            id:"SHP90875",
            order:"OZZO1022",
            customer:"Karan Singh",
            email:"karan.singh@gmail.com",
            courier:"DTDC",
            tracking:"DTC31219075",
            status:"Packed",
            expected:"19 Sep 2026",
            daysAgo:4,
            address:"71 Sector 22, Noida, Uttar Pradesh"
        },

        {
            id:"SHP90874",
            order:"OZZO1021",
            customer:"Meera Kapoor",
            email:"meera.kapoor@gmail.com",
            courier:"Ecom Express",
            tracking:"ECX91219074",
            status:"In Transit",
            expected:"21 Sep 2026",
            daysAgo:5,
            address:"29 Park Street, Kolkata, West Bengal"
        },

        {
            id:"SHP90873",
            order:"OZZO1020",
            customer:"Arjun Patel",
            email:"arjun.patel@gmail.com",
            courier:"Delhivery",
            tracking:"DEL44219073",
            status:"Delivered",
            expected:"15 Sep 2026",
            daysAgo:6,
            address:"18 Satellite Road, Ahmedabad, Gujarat"
        },

        {
            id:"SHP90872",
            order:"OZZO1019",
            customer:"Ishita Joshi",
            email:"ishita.joshi@gmail.com",
            courier:"Blue Dart",
            tracking:"BD67219072",
            status:"In Transit",
            expected:"20 Sep 2026",
            daysAgo:8,
            address:"9 FC Road, Pune, Maharashtra"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body =
        document.getElementById(
            "shippingBody"
        );

    const globalSearch =
        document.getElementById(
            "shippingSearch"
        );

    const tableSearch =
        document.getElementById(
            "tableSearch"
        );

    const statusFilter =
        document.getElementById(
            "shippingStatus"
        );

    const courierFilter =
        document.getElementById(
            "shippingCourier"
        );

    const dateFilter =
        document.getElementById(
            "shippingDate"
        );

    const clearFilters =
        document.getElementById(
            "clearFilters"
        );

    const selectAll =
        document.getElementById(
            "selectAll"
        );

    const resultLabel =
        document.getElementById(
            "resultLabel"
        );

    const selectionLabel =
        document.getElementById(
            "selectionLabel"
        );

    const footerResult =
        document.getElementById(
            "footerResult"
        );

    const currentPageEl =
        document.getElementById(
            "currentPage"
        );

    const prevPage =
        document.getElementById(
            "prevPage"
        );

    const nextPage =
        document.getElementById(
            "nextPage"
        );

    const emptyState =
        document.getElementById(
            "emptyState"
        );

    const toast =
        document.getElementById(
            "adminToast"
        );

    const sidebar =
        document.getElementById(
            "adminSidebar"
        );

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    const menuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );

    const notificationPanel =
        document.getElementById(
            "notificationPanel"
        );

    const notificationBtn =
        document.getElementById(
            "notificationBtn"
        );

    const mobileNotificationBtn =
        document.getElementById(
            "mobileNotificationBtn"
        );

    const closeNotifications =
        document.getElementById(
            "closeNotifications"
        );


    /* =========================================================
       STATE
    ========================================================= */

    let filteredShipments =
        [...shipments];

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


    const statusClass =
        status =>

            status
                .toLowerCase()
                .replaceAll(
                    " ",
                    "-"
                );


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

            const transit =
                shipments.filter(
                    item =>
                        item.status ===
                            "In Transit"
                ).length;


            const outDelivery =
                shipments.filter(
                    item =>
                        item.status ===
                            "Out for Delivery"
                ).length;


            document.getElementById(
                "totalShipmentsCount"
            ).textContent =
                "1,284";


            document.getElementById(
                "inTransitCount"
            ).textContent =
                "184";


            document.getElementById(
                "outDeliveryCount"
            ).textContent =
                "36";


            document.getElementById(
                "deliveredCount"
            ).textContent =
                "1,021";

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

            const selectedCourier =
                courierFilter.value;

            const selectedDate =
                dateFilter.value;


            filteredShipments =
                shipments.filter(
                    item => {

                        const searchable = `

                            ${item.id}
                            ${item.order}
                            ${item.customer}
                            ${item.email}
                            ${item.courier}
                            ${item.tracking}
                            ${item.status}

                        `.toLowerCase();


                        const searchMatch =
                            !query

                            ||

                            query
                                .split(
                                    /\s+/
                                )
                                .every(
                                    token =>
                                        searchable.includes(
                                            token
                                        )
                                );


                        const statusMatch =
                            selectedStatus ===
                                "all"

                            ||

                            item.status ===
                                selectedStatus;


                        const courierMatch =
                            selectedCourier ===
                                "all"

                            ||

                            item.courier ===
                                selectedCourier;


                        const dateMatch =
                            selectedDate ===
                                "all"

                            ||

                            (
                                selectedDate ===
                                    "today"

                                &&

                                item.daysAgo ===
                                    0
                            )

                            ||

                            (
                                selectedDate !==
                                    "today"

                                &&

                                Number(
                                    selectedDate
                                ) >=
                                    item.daysAgo
                            );


                        return (
                            searchMatch &&
                            statusMatch &&
                            courierMatch &&
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
                        filteredShipments.length /
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
                filteredShipments.slice(
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


                            <td class="shipment-id">

                                #${escapeHtml(
                                    item.id
                                )}

                            </td>


                            <td class="shipment-order">

                                #${escapeHtml(
                                    item.order
                                )}

                            </td>


                            <td>

                                <span
                                    class="shipping-customer-main"
                                >

                                    ${escapeHtml(
                                        item.customer
                                    )}

                                </span>


                                <span
                                    class="shipping-customer-sub"
                                >

                                    ${escapeHtml(
                                        item.email
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="shipping-courier"
                                >

                                    <span
                                        class="courier-dot"
                                    ></span>

                                    ${escapeHtml(
                                        item.courier
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="shipping-tracking-main"
                                >

                                    ${escapeHtml(
                                        item.tracking
                                    )}

                                </span>


                                <span
                                    class="shipping-tracking-sub"
                                >

                                    Live tracking

                                </span>

                            </td>


                            <td>

                                <span
                                    class="shipping-status-pill ${statusClass(item.status)}"
                                >

                                    ${escapeHtml(
                                        item.status
                                    )}

                                </span>

                            </td>


                            <td>

                                ${escapeHtml(
                                    item.expected
                                )}

                            </td>


                            <td>

                                <button
                                    type="button"
                                    class="shipping-view-btn view-shipment"
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
                .getElementById(
                    "shippingTable"
                )
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredShipments.length} shipment${
                    filteredShipments.length ===
                    1
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
                    filteredShipments.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredShipments.length} shipments`;


            currentPageEl.textContent =
                currentPage;


            prevPage.disabled =
                currentPage <= 1;


            nextPage.disabled =
                currentPage >=
                totalPages;


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
                    box =>
                        box.checked
                ).length;


            selectAll.checked =
                boxes.length > 0 &&
                checked === boxes.length;


            updateSelection();

        }
    );


    /* =========================================================
       VIEW SHIPMENT
    ========================================================= */

    body.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    ".view-shipment"
                );


            if(!button){
                return;
            }


            const item =
                shipments.find(
                    shipment =>
                        shipment.id ===
                        button.dataset.id
                );


            if(!item){
                return;
            }


            document.getElementById(
                "modalShipmentId"
            ).textContent =
                `#${item.id}`;


            document.getElementById(
                "modalOrder"
            ).textContent =
                `#${item.order}`;


            document.getElementById(
                "modalCustomer"
            ).textContent =
                item.customer;


            document.getElementById(
                "modalStatus"
            ).textContent =
                item.status;


            document.getElementById(
                "modalCourier"
            ).textContent =
                item.courier;


            document.getElementById(
                "modalTracking"
            ).textContent =
                item.tracking;


            document.getElementById(
                "modalExpected"
            ).textContent =
                item.expected;


            document.getElementById(
                "modalAddress"
            ).textContent =
                item.address;


            bootstrap.Modal
                .getOrCreateInstance(
                    document.getElementById(
                        "shippingModal"
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


    courierFilter.addEventListener(
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

            globalSearch.value =
                "";

            tableSearch.value =
                "";

            statusFilter.value =
                "all";

            courierFilter.value =
                "all";

            dateFilter.value =
                "all";


            applyFilters();


            showToast(
                "Shipping filters cleared."
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
                        filteredShipments.length /
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
       MARK PACKED
    ========================================================= */

    document
        .getElementById(
            "markPackedBtn"
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
                        "Select at least one shipment first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} shipment${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } marked as packed.`
                );

            }
        );


    /* =========================================================
       MARK IN TRANSIT
    ========================================================= */

    document
        .getElementById(
            "markTransitBtn"
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
                        "Select at least one shipment first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} shipment${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } marked in transit.`
                );

            }
        );


    /* =========================================================
       MARK DELIVERED
    ========================================================= */

    document
        .getElementById(
            "markDeliveredBtn"
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
                        "Select at least one shipment first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} shipment${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } marked as delivered.`
                );

            }
        );


    /* =========================================================
       EXPORT CSV
    ========================================================= */

    document
        .getElementById(
            "exportShippingBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Shipment ID",
                    "Order",
                    "Customer",
                    "Email",
                    "Courier",
                    "Tracking",
                    "Status",
                    "Expected Delivery"

                ];


                const rows =
                    filteredShipments.map(
                        item => [

                            item.id,
                            item.order,
                            item.customer,
                            item.email,
                            item.courier,
                            item.tracking,
                            item.status,
                            item.expected

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
                    "ozzo-shipments.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Shipments exported successfully."
                );

            }
        );


    /* =========================================================
       PRINT
    ========================================================= */

    document
        .getElementById(
            "printShippingBtn"
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