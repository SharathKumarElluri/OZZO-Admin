document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO INVENTORY DATA
    ========================================================= */

    const inventory = [

        {
            id:"inv-001",
            product:"Classic Casual Shirt",
            subtitle:"Men's Fashion",
            sku:"OZZO-F002",
            category:"Fashion",
            warehouse:"Hyderabad",
            available:28,
            reserved:4,
            reorder:10,
            updated:"18 Sep 2026"
        },

        {
            id:"inv-002",
            product:"Classic Beige Dress",
            subtitle:"Women's Fashion",
            sku:"OZZO-F001",
            category:"Fashion",
            warehouse:"Bengaluru",
            available:42,
            reserved:6,
            reorder:12,
            updated:"18 Sep 2026"
        },

        {
            id:"inv-003",
            product:"Elegant Rose Silk Saree",
            subtitle:"Women's Fashion",
            sku:"OZZO-F007",
            category:"Fashion",
            warehouse:"Mumbai",
            available:19,
            reserved:3,
            reorder:8,
            updated:"17 Sep 2026"
        },

        {
            id:"inv-004",
            product:"Atomic Habits",
            subtitle:"Self Help",
            sku:"OZZO-B001",
            category:"Books",
            warehouse:"Hyderabad",
            available:36,
            reserved:5,
            reorder:10,
            updated:"18 Sep 2026"
        },

        {
            id:"inv-005",
            product:"The Alchemist",
            subtitle:"Fiction",
            sku:"OZZO-B002",
            category:"Books",
            warehouse:"Bengaluru",
            available:24,
            reserved:4,
            reorder:8,
            updated:"17 Sep 2026"
        },

        {
            id:"inv-006",
            product:"Notebook Set",
            subtitle:"Stationery",
            sku:"OZZO-S001",
            category:"Stationery",
            warehouse:"Hyderabad",
            available:5,
            reserved:2,
            reorder:10,
            updated:"16 Sep 2026"
        },

        {
            id:"inv-007",
            product:"Gel Pen Set (Pack of 6)",
            subtitle:"Stationery",
            sku:"OZZO-S002",
            category:"Stationery",
            warehouse:"Bengaluru",
            available:3,
            reserved:1,
            reorder:8,
            updated:"15 Sep 2026"
        },

        {
            id:"inv-008",
            product:"Ultra Thin Day Pads",
            subtitle:"Personal Care",
            sku:"OZZO-P001",
            category:"Pads & Personal Care",
            warehouse:"Hyderabad",
            available:4,
            reserved:2,
            reorder:12,
            updated:"18 Sep 2026"
        },

        {
            id:"inv-009",
            product:"Ultra Soft Comfort Pads",
            subtitle:"Personal Care",
            sku:"OZZO-P002",
            category:"Pads & Personal Care",
            warehouse:"Mumbai",
            available:0,
            reserved:0,
            reorder:10,
            updated:"13 Sep 2026"
        },

        {
            id:"inv-010",
            product:"Kids Summer Outfit",
            subtitle:"Kids Fashion",
            sku:"OZZO-F005",
            category:"Fashion",
            warehouse:"Mumbai",
            available:0,
            reserved:0,
            reorder:8,
            updated:"12 Sep 2026"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const inventoryBody =
        document.getElementById(
            "inventoryBody"
        );

    const globalSearch =
        document.getElementById(
            "globalInventorySearch"
        );

    const tableSearch =
        document.getElementById(
            "inventorySearch"
        );

    const categoryFilter =
        document.getElementById(
            "inventoryCategory"
        );

    const stockFilter =
        document.getElementById(
            "inventoryStock"
        );

    const warehouseFilter =
        document.getElementById(
            "inventoryWarehouse"
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

    const adjustForm =
        document.getElementById(
            "adjustForm"
        );

    const adjustModal =
        document.getElementById(
            "adjustModal"
        );


    /* =========================================================
       STATE
    ========================================================= */

    let filteredInventory =
        [...inventory];

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


    const getStatus =
        item => {

            if(
                item.available <= 0
            ){

                return "Out of Stock";

            }


            if(
                item.available <=
                item.reorder
            ){

                return "Low Stock";

            }


            return "Healthy";

        };


    const getStatusClass =
        status =>
            status
                .toLowerCase()
                .replaceAll(
                    " ",
                    "-"
                );


    const getProductIcon =
        category => {

            if(
                category === "Fashion"
            ){

                return "fa-shirt";

            }


            if(
                category === "Books"
            ){

                return "fa-book";

            }


            if(
                category === "Stationery"
            ){

                return "fa-pen";

            }


            return "fa-heart";

        };


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

            const totalUnits =
                inventory.reduce(
                    (
                        total,
                        item
                    ) =>
                        total +
                        item.available,
                    0
                );


            const healthy =
                inventory.filter(
                    item =>
                        getStatus(item) ===
                        "Healthy"
                ).length;


            const low =
                inventory.filter(
                    item =>
                        getStatus(item) ===
                        "Low Stock"
                ).length;


            const out =
                inventory.filter(
                    item =>
                        getStatus(item) ===
                        "Out of Stock"
                ).length;


            document.getElementById(
                "totalUnitsCount"
            ).textContent =
                totalUnits.toLocaleString(
                    "en-IN"
                );


            document.getElementById(
                "healthyStockCount"
            ).textContent =
                healthy;


            document.getElementById(
                "lowStockCount"
            ).textContent =
                low;


            document.getElementById(
                "outOfStockCount"
            ).textContent =
                out;

        };


    /* =========================================================
       FILTERING
    ========================================================= */

    const applyFilters =
        () => {

            const query =
                getSearchQuery();

            const selectedCategory =
                categoryFilter.value;

            const selectedStock =
                stockFilter.value;

            const selectedWarehouse =
                warehouseFilter.value;


            filteredInventory =
                inventory.filter(
                    item => {

                        const searchable = `

                            ${item.id}
                            ${item.product}
                            ${item.subtitle}
                            ${item.sku}
                            ${item.category}
                            ${item.warehouse}

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


                        const categoryMatch =
                            selectedCategory ===
                                "all"

                            ||

                            item.category ===
                                selectedCategory;


                        const stockStatus =
                            getStatus(item);


                        const stockMatch =
                            selectedStock ===
                                "all"

                            ||

                            (
                                selectedStock ===
                                    "Healthy"

                                &&
                                stockStatus ===
                                    "Healthy"
                            )

                            ||

                            (
                                selectedStock ===
                                    "Low Stock"

                                &&
                                stockStatus ===
                                    "Low Stock"
                            )

                            ||

                            (
                                selectedStock ===
                                    "Out of Stock"

                                &&
                                stockStatus ===
                                    "Out of Stock"
                            );


                        const warehouseMatch =
                            selectedWarehouse ===
                                "all"

                            ||

                            item.warehouse ===
                                selectedWarehouse;


                        return (
                            searchMatch &&
                            categoryMatch &&
                            stockMatch &&
                            warehouseMatch
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
                        filteredInventory.length /
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
                filteredInventory.slice(
                    start,
                    start + pageSize
                );


            inventoryBody.innerHTML =

                pageRows

                    .map(
                        item => {

                            const status =
                                getStatus(item);


                            return `

                                <tr>

                                    <td>

                                        <input
                                            class="row-check"
                                            type="checkbox"
                                            value="${escapeHtml(item.id)}"
                                            aria-label="Select ${escapeHtml(item.product)}"
                                        >

                                    </td>


                                    <td>

                                        <div
                                            class="inventory-product-cell"
                                        >

                                            <div
                                                class="inventory-product-icon"
                                            >

                                                <i
                                                    class="fa-solid ${getProductIcon(item.category)}"
                                                ></i>

                                            </div>


                                            <div>

                                                <span
                                                    class="inventory-product-name"
                                                >

                                                    ${escapeHtml(
                                                        item.product
                                                    )}

                                                </span>


                                                <span
                                                    class="inventory-product-sub"
                                                >

                                                    ${escapeHtml(
                                                        item.subtitle
                                                    )}

                                                </span>

                                            </div>

                                        </div>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-sku"
                                        >

                                            ${escapeHtml(
                                                item.sku
                                            )}

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-category"
                                        >

                                            ${escapeHtml(
                                                item.category
                                            )}

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-warehouse"
                                        >

                                            ${escapeHtml(
                                                item.warehouse
                                            )}

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-number"
                                        >

                                            ${item.available}

                                        </span>


                                        <span
                                            class="inventory-number-sub"
                                        >

                                            available

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-number"
                                        >

                                            ${item.reserved}

                                        </span>


                                        <span
                                            class="inventory-number-sub"
                                        >

                                            reserved

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-reorder"
                                        >

                                            ${item.reorder}

                                        </span>

                                    </td>


                                    <td>

                                        <span
                                            class="inventory-status ${getStatusClass(status)}"
                                        >

                                            <i
                                                class="fa-solid fa-circle"
                                            ></i>

                                            ${escapeHtml(
                                                status
                                            )}

                                        </span>

                                    </td>


                                    <td>

                                        ${escapeHtml(
                                            item.updated
                                        )}

                                    </td>


                                    <td>

                                        <div
                                            class="inventory-action-wrap"
                                        >

                                            <button
                                                class="inventory-action-btn view-inventory"
                                                type="button"
                                                data-id="${escapeHtml(item.id)}"
                                                title="View stock"
                                            >

                                                <i
                                                    class="fa-regular fa-eye"
                                                ></i>

                                            </button>


                                            <button
                                                class="inventory-action-btn adjust adjust-inventory"
                                                type="button"
                                                data-id="${escapeHtml(item.id)}"
                                                title="Adjust stock"
                                            >

                                                <i
                                                    class="fa-solid fa-plus-minus"
                                                ></i>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            `;

                        }
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
                    "inventoryTable"
                )
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredInventory.length} inventory item${
                    filteredInventory.length === 1
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
                    filteredInventory.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredInventory.length} inventory items`;


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


    inventoryBody.addEventListener(
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
       VIEW INVENTORY
    ========================================================= */

    inventoryBody.addEventListener(
        "click",
        event => {

            const viewButton =
                event.target.closest(
                    ".view-inventory"
                );


            const adjustButton =
                event.target.closest(
                    ".adjust-inventory"
                );


            if(
                viewButton
            ){

                const item =
                    inventory.find(
                        inventoryItem =>
                            inventoryItem.id ===
                            viewButton.dataset.id
                    );


                if(
                    !item
                ){

                    return;

                }


                const status =
                    getStatus(item);


                document.getElementById(
                    "detailsProduct"
                ).textContent =
                    item.product;


                document.getElementById(
                    "detailsSku"
                ).textContent =
                    item.sku;


                document.getElementById(
                    "detailsWarehouse"
                ).textContent =
                    item.warehouse;


                document.getElementById(
                    "detailsAvailable"
                ).textContent =
                    item.available;


                document.getElementById(
                    "detailsReserved"
                ).textContent =
                    item.reserved;


                document.getElementById(
                    "detailsReorder"
                ).textContent =
                    item.reorder;


                document.getElementById(
                    "detailsStatus"
                ).textContent =
                    status;


                const healthBar =
                    document.getElementById(
                        "inventoryHealthBar"
                    );


                const healthText =
                    document.getElementById(
                        "inventoryHealthText"
                    );


                const ratio =
                    item.reorder > 0

                        ? Math.min(
                            100,
                            Math.round(
                                (
                                    item.available /
                                    (
                                        item.reorder *
                                        3
                                    )
                                ) *
                                100
                            )
                        )

                        : 100;


                healthBar.style.width =
                    `${ratio}%`;


                healthText.textContent =
                    status === "Healthy"

                        ? "Stock level is healthy."

                        : status === "Low Stock"

                            ? "Stock is below the recommended level."

                            : "Product is currently out of stock.";


                bootstrap.Modal
                    .getOrCreateInstance(
                        document.getElementById(
                            "inventoryDetailsModal"
                        )
                    )
                    .show();


                return;

            }


            if(
                adjustButton
            ){

                const item =
                    inventory.find(
                        inventoryItem =>
                            inventoryItem.id ===
                            adjustButton.dataset.id
                    );


                if(
                    item
                ){

                    document.getElementById(
                        "adjustProduct"
                    ).value =
                        item.product;

                }


                bootstrap.Modal
                    .getOrCreateInstance(
                        adjustModal
                    )
                    .show();

            }

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

    categoryFilter.addEventListener(
        "change",
        applyFilters
    );


    stockFilter.addEventListener(
        "change",
        applyFilters
    );


    warehouseFilter.addEventListener(
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

            categoryFilter.value =
                "all";

            stockFilter.value =
                "all";

            warehouseFilter.value =
                "all";


            applyFilters();


            showToast(
                "Inventory filters cleared."
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
                        filteredInventory.length /
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
       BULK ACTIONS
    ========================================================= */

    document
        .getElementById(
            "restockSelectedBtn"
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
                        "Select at least one inventory item first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} item${
                        selected.length === 1
                            ? ""
                            : "s"
                    } ready for restocking.`
                );

            }
        );


    document
        .getElementById(
            "adjustSelectedBtn"
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
                        "Select at least one inventory item first."
                    );

                    return;

                }


                bootstrap.Modal
                    .getOrCreateInstance(
                        adjustModal
                    )
                    .show();


                showToast(
                    `${selected.length} item${
                        selected.length === 1
                            ? ""
                            : "s"
                    } selected for adjustment.`
                );

            }
        );


    document
        .getElementById(
            "markOutSelectedBtn"
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
                        "Select at least one inventory item first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} item${
                        selected.length === 1
                            ? ""
                            : "s"
                    } selected for stock update.`
                );

            }
        );


    /* =========================================================
       EXPORT
    ========================================================= */

    document
        .getElementById(
            "exportInventoryBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Inventory ID",
                    "Product",
                    "SKU",
                    "Category",
                    "Warehouse",
                    "Available",
                    "Reserved",
                    "Reorder Level",
                    "Stock Status",
                    "Updated"

                ];


                const rows =
                    filteredInventory.map(
                        item => [

                            item.id,
                            item.product,
                            item.sku,
                            item.category,
                            item.warehouse,
                            item.available,
                            item.reserved,
                            item.reorder,
                            getStatus(item),
                            item.updated

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
                    "ozzo-inventory.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Inventory exported successfully."
                );

            }
        );


    /* =========================================================
       ADJUST MODAL
    ========================================================= */

    const openAdjustModal =
        () => {

            bootstrap.Modal
                .getOrCreateInstance(
                    adjustModal
                )
                .show();

        };


    document
        .getElementById(
            "openAdjustModal"
        )
        .addEventListener(
            "click",
            openAdjustModal
        );


    document
        .getElementById(
            "openAdjustModal2"
        )
        .addEventListener(
            "click",
            openAdjustModal
        );


    /* =========================================================
       FORM
    ========================================================= */

    adjustForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const product =
                document.getElementById(
                    "adjustProduct"
                ).value;


            const type =
                document.getElementById(
                    "adjustType"
                ).value;


            const quantity =
                Number(
                    document.getElementById(
                        "adjustQuantity"
                    ).value
                );


            if(
                !product ||
                !quantity ||
                quantity < 1
            ){

                showToast(
                    "Please enter a valid stock adjustment."
                );

                return;

            }


            bootstrap.Modal
                .getInstance(
                    adjustModal
                )
                ?.hide();


            adjustForm.reset();


            showToast(
                `${quantity} unit${
                    quantity === 1
                        ? ""
                        : "s"
                } ${
                    type === "add"
                        ? "added to"
                        : "removed from"
                } ${product}.`
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