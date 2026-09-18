document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO CUSTOMER DATA
    ========================================================= */

    const customers = [

        {
            id:"CUST-2143",
            name:"Aarav Mehta",
            initials:"AM",
            email:"aarav.mehta@gmail.com",
            phone:"+91 98765 43210",
            orders:8,
            spent:24860,
            type:"VIP",
            status:"Active",
            joined:"12 Jan 2025",
            address:"12 Lake View Road, Jubilee Hills, Hyderabad, Telangana",
            lastActivity:"Today",
            activity:"Placed an order for Classic Oversized Shirt."
        },

        {
            id:"CUST-2142",
            name:"Priya Sharma",
            initials:"PS",
            email:"priya.sharma@gmail.com",
            phone:"+91 98123 44567",
            orders:6,
            spent:18740,
            type:"VIP",
            status:"Active",
            joined:"24 Feb 2025",
            address:"8 Green Park, Banjara Hills, Hyderabad, Telangana",
            lastActivity:"Today",
            activity:"Purchased Atomic Habits."
        },

        {
            id:"CUST-2141",
            name:"Rahul Verma",
            initials:"RV",
            email:"rahul.verma@gmail.com",
            phone:"+91 99881 23456",
            orders:4,
            spent:9640,
            type:"Regular",
            status:"Active",
            joined:"16 Mar 2025",
            address:"24 Residency Road, Bengaluru, Karnataka",
            lastActivity:"Yesterday",
            activity:"Viewed Notebook Set."
        },

        {
            id:"CUST-2140",
            name:"Sneha Reddy",
            initials:"SR",
            email:"sneha.reddy@gmail.com",
            phone:"+91 98490 76543",
            orders:11,
            spent:32280,
            type:"VIP",
            status:"Active",
            joined:"05 Apr 2025",
            address:"5 Hitech City Lane, Madhapur, Hyderabad, Telangana",
            lastActivity:"Today",
            activity:"Placed a repeat order."
        },

        {
            id:"CUST-2139",
            name:"Vikram Rao",
            initials:"VR",
            email:"vikram.rao@gmail.com",
            phone:"+91 98711 22334",
            orders:3,
            spent:6880,
            type:"Regular",
            status:"Active",
            joined:"18 May 2025",
            address:"17 Whitefield Main Road, Bengaluru, Karnataka",
            lastActivity:"2 days ago",
            activity:"Updated delivery address."
        },

        {
            id:"CUST-2138",
            name:"Ananya Nair",
            initials:"AN",
            email:"ananya.nair@gmail.com",
            phone:"+91 98470 55123",
            orders:7,
            spent:14290,
            type:"VIP",
            status:"Active",
            joined:"02 Jun 2025",
            address:"44 MG Road, Kochi, Kerala",
            lastActivity:"Yesterday",
            activity:"Purchased The Alchemist."
        },

        {
            id:"CUST-2137",
            name:"Karan Singh",
            initials:"KS",
            email:"karan.singh@gmail.com",
            phone:"+91 98732 11229",
            orders:2,
            spent:3480,
            type:"Regular",
            status:"Inactive",
            joined:"14 Jul 2025",
            address:"71 Sector 22, Noida, Uttar Pradesh",
            lastActivity:"18 days ago",
            activity:"Last order completed."
        },

        {
            id:"CUST-2136",
            name:"Meera Kapoor",
            initials:"MK",
            email:"meera.kapoor@gmail.com",
            phone:"+91 98310 77654",
            orders:9,
            spent:21890,
            type:"VIP",
            status:"Active",
            joined:"22 Aug 2025",
            address:"29 Park Street, Kolkata, West Bengal",
            lastActivity:"Today",
            activity:"Purchased Elegant Rose Silk Saree."
        },

        {
            id:"CUST-2135",
            name:"Arjun Patel",
            initials:"AP",
            email:"arjun.patel@gmail.com",
            phone:"+91 98250 34321",
            orders:1,
            spent:449,
            type:"Regular",
            status:"Active",
            joined:"09 Sep 2025",
            address:"18 Satellite Road, Ahmedabad, Gujarat",
            lastActivity:"3 days ago",
            activity:"Purchased Think Like a Monk."
        },

        {
            id:"CUST-2134",
            name:"Ishita Joshi",
            initials:"IJ",
            email:"ishita.joshi@gmail.com",
            phone:"+91 97654 88210",
            orders:5,
            spent:11980,
            type:"Regular",
            status:"Blocked",
            joined:"20 Oct 2025",
            address:"9 FC Road, Pune, Maharashtra",
            lastActivity:"30 days ago",
            activity:"Account temporarily blocked."
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const customersBody =
        document.getElementById(
            "customersBody"
        );


    const globalSearch =
        document.getElementById(
            "globalCustomerSearch"
        );


    const customerSearch =
        document.getElementById(
            "customerSearch"
        );


    const statusFilter =
        document.getElementById(
            "customerStatus"
        );


    const typeFilter =
        document.getElementById(
            "customerType"
        );


    const ordersFilter =
        document.getElementById(
            "customerOrders"
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


    const customerForm =
        document.getElementById(
            "customerForm"
        );


    const customerDetailsModal =
        document.getElementById(
            "customerDetailsModal"
        );


    const customerFormModal =
        document.getElementById(
            "customerFormModal"
        );


    /* =========================================================
       STATE
    ========================================================= */

    let filteredCustomers =
        [...customers];


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


    const formatCurrency =
        amount =>
            `₹${Number(amount).toLocaleString("en-IN")}`;


    const showToast =
        message => {

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


    const typeClass =
        type =>
            type
                .toLowerCase();


    /* =========================================================
       SEARCH QUERY
    ========================================================= */

    const getSearchQuery =
        () => {

            const first =
                globalSearch?.value.trim()
                || "";


            const second =
                customerSearch?.value.trim()
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

            const active =
                customers.filter(
                    customer =>
                        customer.status ===
                        "Active"
                ).length;


            const vip =
                customers.filter(
                    customer =>
                        customer.type ===
                        "VIP"
                ).length;


            document.getElementById(
                "totalCustomersCount"
            ).textContent =
                "2,143";


            document.getElementById(
                "activeCustomersCount"
            ).textContent =
                "1,846";


            document.getElementById(
                "newCustomersCount"
            ).textContent =
                "186";


            document.getElementById(
                "vipCustomersCount"
            ).textContent =
                vip;

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


            const selectedType =
                typeFilter.value;


            const selectedOrders =
                ordersFilter.value;


            filteredCustomers =
                customers.filter(
                    customer => {

                        const searchable = `

                            ${customer.id}
                            ${customer.name}
                            ${customer.email}
                            ${customer.phone}

                        `.toLowerCase();


                        const searchMatch =
                            !query ||

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

                            customer.status ===
                                selectedStatus;


                        const typeMatch =
                            selectedType ===
                                "all"

                            ||

                            customer.type ===
                                selectedType;


                        let ordersMatch =
                            true;


                        if(
                            selectedOrders ===
                            "0"
                        ){

                            ordersMatch =
                                customer.orders ===
                                0;

                        }


                        if(
                            selectedOrders ===
                            "1-5"
                        ){

                            ordersMatch =
                                customer.orders >=
                                    1

                                &&

                                customer.orders <=
                                    5;

                        }


                        if(
                            selectedOrders ===
                            "6+"
                        ){

                            ordersMatch =
                                customer.orders >=
                                    6;

                        }


                        return (
                            searchMatch &&
                            statusMatch &&
                            typeMatch &&
                            ordersMatch
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
                        filteredCustomers.length /
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
                filteredCustomers.slice(
                    start,
                    start + pageSize
                );


            customersBody.innerHTML =

                pageRows

                    .map(
                        customer => `

                        <tr>


                            <td>

                                <input
                                    class="row-check"
                                    type="checkbox"
                                    value="${escapeHtml(customer.id)}"
                                    aria-label="Select ${escapeHtml(customer.name)}"
                                >

                            </td>


                            <td>

                                <div
                                    class="customer-cell"
                                >

                                    <div
                                        class="customer-avatar ${customer.type === "VIP" ? "vip" : ""}"
                                    >

                                        ${escapeHtml(
                                            customer.initials
                                        )}

                                    </div>


                                    <div>

                                        <span
                                            class="customer-name"
                                        >

                                            ${escapeHtml(
                                                customer.name
                                            )}

                                        </span>


                                        <span
                                            class="customer-email"
                                        >

                                            ${escapeHtml(
                                                customer.email
                                            )}

                                        </span>

                                    </div>

                                </div>

                            </td>


                            <td>

                                <span
                                    class="customer-id"
                                >

                                    ${escapeHtml(
                                        customer.id
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="customer-phone"
                                >

                                    ${escapeHtml(
                                        customer.phone
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="customer-orders"
                                >

                                    ${customer.orders}

                                </span>


                                <span
                                    class="customer-orders-sub"
                                >

                                    orders

                                </span>

                            </td>


                            <td>

                                <span
                                    class="customer-spent"
                                >

                                    ${formatCurrency(
                                        customer.spent
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="customer-type ${typeClass(customer.type)}"
                                >

                                    ${escapeHtml(
                                        customer.type
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="customer-status ${statusClass(customer.status)}"
                                >

                                    <i
                                        class="fa-solid fa-circle"
                                    ></i>

                                    ${escapeHtml(
                                        customer.status
                                    )}

                                </span>

                            </td>


                            <td>

                                ${escapeHtml(
                                    customer.joined
                                )}

                            </td>


                            <td>

                                <div
                                    class="customer-action-wrap"
                                >


                                    <button
                                        class="customer-action-btn view-customer"
                                        type="button"
                                        data-id="${escapeHtml(customer.id)}"
                                        title="View customer"
                                    >

                                        <i
                                            class="fa-regular fa-eye"
                                        ></i>

                                    </button>


                                    <button
                                        class="customer-action-btn edit-customer"
                                        type="button"
                                        data-id="${escapeHtml(customer.id)}"
                                        title="Edit customer"
                                    >

                                        <i
                                            class="fa-solid fa-pen"
                                        ></i>

                                    </button>


                                    <button
                                        class="customer-action-btn delete delete-customer"
                                        type="button"
                                        data-id="${escapeHtml(customer.id)}"
                                        title="Delete customer"
                                    >

                                        <i
                                            class="fa-solid fa-trash"
                                        ></i>

                                    </button>


                                </div>

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
                    "customersTable"
                )
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredCustomers.length} customer${
                    filteredCustomers.length ===
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
                    filteredCustomers.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredCustomers.length} customers`;


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

            selectionLabel.textContent =
                `${getSelected().length} selected`;

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


    customersBody.addEventListener(
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
                checked ===
                    boxes.length;


            updateSelection();

        }
    );


    /* =========================================================
       VIEW / EDIT / DELETE
    ========================================================= */

    customersBody.addEventListener(
        "click",
        event => {

            const viewButton =
                event.target.closest(
                    ".view-customer"
                );


            const editButton =
                event.target.closest(
                    ".edit-customer"
                );


            const deleteButton =
                event.target.closest(
                    ".delete-customer"
                );


            if(
                viewButton
            ){

                openCustomerDetails(
                    viewButton.dataset.id
                );

                return;

            }


            if(
                editButton
            ){

                const customer =
                    customers.find(
                        item =>
                            item.id ===
                            editButton.dataset.id
                    );


                if(
                    customer
                ){

                    openCustomerForm(
                        customer
                    );

                    showToast(
                        `Edit ${customer.name} is ready to connect.`
                    );

                }

                return;

            }


            if(
                deleteButton
            ){

                const customer =
                    customers.find(
                        item =>
                            item.id ===
                            deleteButton.dataset.id
                    );


                if(
                    !customer
                ){

                    return;

                }


                const confirmed =
                    window.confirm(
                        `Delete ${customer.name}?`
                    );


                if(
                    confirmed
                ){

                    showToast(
                        `${customer.name} marked for deletion.`
                    );

                }

            }

        }
    );


    /* =========================================================
       OPEN DETAILS
    ========================================================= */

    const openCustomerDetails =
        id => {

            const customer =
                customers.find(
                    item =>
                        item.id ===
                        id
                );


            if(
                !customer
            ){

                return;

            }


            document.getElementById(
                "detailsCustomerName"
            ).textContent =
                customer.name;


            document.getElementById(
                "detailsFullName"
            ).textContent =
                customer.name;


            document.getElementById(
                "detailsAvatar"
            ).textContent =
                customer.initials;


            document.getElementById(
                "detailsEmail"
            ).textContent =
                customer.email;


            document.getElementById(
                "detailsId"
            ).textContent =
                customer.id;


            document.getElementById(
                "detailsPhone"
            ).textContent =
                customer.phone;


            document.getElementById(
                "detailsOrders"
            ).textContent =
                customer.orders;


            document.getElementById(
                "detailsSpent"
            ).textContent =
                formatCurrency(
                    customer.spent
                );


            document.getElementById(
                "detailsType"
            ).textContent =
                customer.type;


            document.getElementById(
                "detailsStatus"
            ).textContent =
                customer.status;


            document.getElementById(
                "detailsAddress"
            ).textContent =
                customer.address;


            document.getElementById(
                "detailsLastActivity"
            ).textContent =
                customer.lastActivity;


            document.getElementById(
                "detailsActivity"
            ).textContent =
                customer.activity;


            bootstrap.Modal
                .getOrCreateInstance(
                    customerDetailsModal
                )
                .show();

        };


    /* =========================================================
       SEARCH SYNC
    ========================================================= */

    [
        globalSearch,
        customerSearch
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

                        customerSearch.value =
                            globalSearch.value;

                    }


                    if(
                        input ===
                        customerSearch
                    ){

                        globalSearch.value =
                            customerSearch.value;

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


    typeFilter.addEventListener(
        "change",
        applyFilters
    );


    ordersFilter.addEventListener(
        "change",
        applyFilters
    );


    /* =========================================================
       CLEAR
    ========================================================= */

    clearFilters.addEventListener(
        "click",
        () => {

            globalSearch.value =
                "";


            customerSearch.value =
                "";


            statusFilter.value =
                "all";


            typeFilter.value =
                "all";


            ordersFilter.value =
                "all";


            applyFilters();


            showToast(
                "Customer filters cleared."
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
                        filteredCustomers.length /
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
       BULK ACTIVATE
    ========================================================= */

    document
        .getElementById(
            "activateSelectedBtn"
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
                        "Select at least one customer first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} customer${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready to activate.`
                );

            }
        );


    /* =========================================================
       BULK DEACTIVATE
    ========================================================= */

    document
        .getElementById(
            "deactivateSelectedBtn"
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
                        "Select at least one customer first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} customer${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready to deactivate.`
                );

            }
        );


    /* =========================================================
       BULK DELETE
    ========================================================= */

    document
        .getElementById(
            "deleteSelectedBtn"
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
                        "Select at least one customer first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} customer${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } selected for deletion.`
                );

            }
        );


    /* =========================================================
       EXPORT CSV
    ========================================================= */

    document
        .getElementById(
            "exportCustomersBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Customer ID",
                    "Name",
                    "Email",
                    "Phone",
                    "Orders",
                    "Total Spent",
                    "Type",
                    "Status",
                    "Joined"

                ];


                const rows =
                    filteredCustomers.map(
                        customer => [

                            customer.id,
                            customer.name,
                            customer.email,
                            customer.phone,
                            customer.orders,
                            formatCurrency(
                                customer.spent
                            ),
                            customer.type,
                            customer.status,
                            customer.joined

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
                    "ozzo-customers.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Customers exported successfully."
                );

            }
        );


    /* =========================================================
       CUSTOMER FORM
    ========================================================= */

    const openCustomerForm =
        () => {

            customerForm.reset();


            bootstrap.Modal
                .getOrCreateInstance(
                    customerFormModal
                )
                .show();

        };


    document
        .getElementById(
            "openCustomerModal"
        )
        .addEventListener(
            "click",
            openCustomerForm
        );


    document
        .getElementById(
            "openCustomerModal2"
        )
        .addEventListener(
            "click",
            openCustomerForm
        );


    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    customerForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "customerName"
                    )
                    .value
                    .trim();


            const email =
                document
                    .getElementById(
                        "customerEmail"
                    )
                    .value
                    .trim();


            if(
                !name ||
                !email
            ){

                showToast(
                    "Please complete the required fields."
                );

                return;

            }


            bootstrap.Modal
                .getInstance(
                    customerFormModal
                )
                ?.hide();


            customerForm.reset();


            showToast(
                `${name} saved successfully.`
            );

        }
    );


    /* =========================================================
       EDIT FROM DETAILS
    ========================================================= */

    document
        .getElementById(
            "editFromDetailsBtn"
        )
        .addEventListener(
            "click",
            () => {

                bootstrap.Modal
                    .getInstance(
                        customerDetailsModal
                    )
                    ?.hide();


                showToast(
                    "Edit Customer is ready to connect."
                );

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
                            ||
                            "Module";


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
       ESCAPE
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