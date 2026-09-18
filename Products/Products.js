document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO PRODUCTS DATA
    ========================================================= */

    const products = [

        {
            id:"fashion-001",
            name:"Classic Beige Dress",
            subtitle:"Women's Fashion",
            sku:"OZZO-F001",
            category:"Fashion",
            price:1299,
            mrp:1799,
            stock:42,
            status:"Active",
            updated:"18 Sep 2026",
            image:"../women shirt.jpg"
        },

        {
            id:"fashion-002",
            name:"Classic Casual Shirt",
            subtitle:"Men's Fashion",
            sku:"OZZO-F002",
            category:"Fashion",
            price:999,
            mrp:1399,
            stock:28,
            status:"Active",
            updated:"18 Sep 2026",
            image:"../hoddie.jpg"
        },

        {
            id:"fashion-007",
            name:"Elegant Rose Silk Saree",
            subtitle:"Women's Fashion",
            sku:"OZZO-F007",
            category:"Fashion",
            price:1499,
            mrp:1999,
            stock:19,
            status:"Active",
            updated:"17 Sep 2026",
            image:"../saree2.jpg"
        },

        {
            id:"fashion-008",
            name:"Classic Green Saree",
            subtitle:"Women's Fashion",
            sku:"OZZO-F008",
            category:"Fashion",
            price:1699,
            mrp:2199,
            stock:7,
            status:"Active",
            updated:"16 Sep 2026",
            image:"../saree2.jpg"
        },

        {
            id:"book-001",
            name:"Atomic Habits",
            subtitle:"Self Help",
            sku:"OZZO-B001",
            category:"Books",
            price:499,
            mrp:699,
            stock:36,
            status:"Active",
            updated:"18 Sep 2026",
            image:"../book.jpg"
        },

        {
            id:"book-002",
            name:"The Alchemist",
            subtitle:"Fiction",
            sku:"OZZO-B002",
            category:"Books",
            price:399,
            mrp:599,
            stock:24,
            status:"Active",
            updated:"17 Sep 2026",
            image:"../book.jpg"
        },

        {
            id:"stationery-001",
            name:"Notebook Set",
            subtitle:"Stationery",
            sku:"OZZO-S001",
            category:"Stationery",
            price:299,
            mrp:399,
            stock:5,
            status:"Active",
            updated:"16 Sep 2026",
            image:"../books set.jpg"
        },

        {
            id:"stationery-002",
            name:"Gel Pen Set (Pack of 6)",
            subtitle:"Stationery",
            sku:"OZZO-S002",
            category:"Stationery",
            price:249,
            mrp:349,
            stock:3,
            status:"Active",
            updated:"15 Sep 2026",
            image:"../pens.jpg"
        },

        {
            id:"pads-001",
            name:"Ultra Thin Day Pads",
            subtitle:"Personal Care",
            sku:"OZZO-P001",
            category:"Pads & Personal Care",
            price:199,
            mrp:249,
            stock:4,
            status:"Active",
            updated:"18 Sep 2026",
            image:"../pads.jpg"
        },

        {
            id:"pads-002",
            name:"Ultra Soft Comfort Pads",
            subtitle:"Personal Care",
            sku:"OZZO-P002",
            category:"Pads & Personal Care",
            price:249,
            mrp:299,
            stock:0,
            status:"Draft",
            updated:"13 Sep 2026",
            image:"../pads.jpg"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const productsBody =
        document.getElementById(
            "productsBody"
        );

    const globalSearch =
        document.getElementById(
            "globalProductSearch"
        );

    const productSearch =
        document.getElementById(
            "productSearch"
        );

    const categoryFilter =
        document.getElementById(
            "categoryFilter"
        );

    const stockFilter =
        document.getElementById(
            "stockFilter"
        );

    const statusFilter =
        document.getElementById(
            "statusFilter"
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

    const productForm =
        document.getElementById(
            "productForm"
        );


    /* =========================================================
       PAGINATION
    ========================================================= */

    let filteredProducts =
        [...products];

    let currentPage =
        1;

    const pageSize =
        7;


    /* =========================================================
       HELPERS
    ========================================================= */

    const formatCurrency =
        amount =>
            `₹${Number(amount).toLocaleString("en-IN")}`;


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


    const stockStatus =
        stock => {

            if(
                stock <= 0
            ){

                return "Out of Stock";

            }


            if(
                stock <= 7
            ){

                return "Low Stock";

            }


            return "In Stock";

        };


    const stockClass =
        stock => {

            if(
                stock <= 0
            ){

                return "out";

            }


            if(
                stock <= 7
            ){

                return "low";

            }


            return "in";

        };


    const statusClass =
        status =>
            status.toLowerCase();


    /* =========================================================
       SUMMARY
    ========================================================= */

    const updateSummary =
        () => {

            const total =
                products.length;

            const inStock =
                products.filter(
                    product =>
                        product.stock > 7
                ).length;

            const lowStock =
                products.filter(
                    product =>
                        product.stock > 0 &&
                        product.stock <= 7
                ).length;

            const outStock =
                products.filter(
                    product =>
                        product.stock <= 0
                ).length;


            document.getElementById(
                "totalProductsCount"
            ).textContent =
                total;


            document.getElementById(
                "inStockCount"
            ).textContent =
                inStock;


            document.getElementById(
                "lowStockCount"
            ).textContent =
                lowStock;


            document.getElementById(
                "outStockCount"
            ).textContent =
                outStock;

        };


    /* =========================================================
       SEARCH QUERY
    ========================================================= */

    const getSearchQuery =
        () => {

            const top =
                globalSearch?.value.trim()
                || "";

            const table =
                productSearch?.value.trim()
                || "";

            return `${top} ${table}`
                .trim()
                .toLowerCase();

        };


    /* =========================================================
       FILTERING
    ========================================================= */

    const applyFilters =
        () => {

            const query =
                getSearchQuery();

            const category =
                categoryFilter.value;

            const stock =
                stockFilter.value;

            const status =
                statusFilter.value;


            filteredProducts =
                products.filter(
                    product => {

                        const searchable = `

                            ${product.id}
                            ${product.name}
                            ${product.subtitle}
                            ${product.sku}
                            ${product.category}

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


                        const categoryMatch =
                            category === "all" ||

                            product.category ===
                                category;


                        const productStock =
                            stockStatus(
                                product.stock
                            );


                        const stockMatch =
                            stock === "all" ||

                            productStock ===
                                stock;


                        const statusMatch =
                            status === "all" ||

                            product.status ===
                                status;


                        return (
                            searchMatch &&
                            categoryMatch &&
                            stockMatch &&
                            statusMatch
                        );

                    }
                );


            currentPage =
                1;


            render();

        };


    /* =========================================================
       PRODUCT IMAGE
    ========================================================= */

    const productImage =
        product => {

            if(
                !product.image
            ){

                return `
                    <div class="product-image">
                        <div class="product-placeholder">
                            <i class="fa-solid fa-box"></i>
                        </div>
                    </div>
                `;

            }


            return `
                <div class="product-image">
                    <img
                        src="${escapeHtml(product.image)}"
                        alt="${escapeHtml(product.name)}"
                        onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=&quot;product-placeholder&quot;><i class=&quot;fa-solid fa-box&quot;></i></div>';"
                    >
                </div>
            `;

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
                        filteredProducts.length /
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
                filteredProducts.slice(
                    start,
                    start + pageSize
                );


            productsBody.innerHTML =

                pageRows

                    .map(
                        product => `

                        <tr>

                            <td>

                                <input
                                    class="row-check"
                                    type="checkbox"
                                    value="${escapeHtml(product.id)}"
                                    aria-label="Select ${escapeHtml(product.name)}"
                                >

                            </td>


                            <td>

                                <div class="product-cell">

                                    ${productImage(product)}


                                    <div>

                                        <span
                                            class="product-name"
                                        >
                                            ${escapeHtml(
                                                product.name
                                            )}
                                        </span>


                                        <span
                                            class="product-subtitle"
                                        >
                                            ${escapeHtml(
                                                product.subtitle
                                            )}
                                        </span>

                                    </div>

                                </div>

                            </td>


                            <td>

                                <span
                                    class="product-sku"
                                >
                                    ${escapeHtml(
                                        product.sku
                                    )}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="category-tag"
                                >
                                    ${escapeHtml(
                                        product.category
                                    )}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="product-price"
                                >
                                    ${formatCurrency(
                                        product.price
                                    )}
                                </span>


                                <span
                                    class="product-mrp"
                                >
                                    ${formatCurrency(
                                        product.mrp
                                    )}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="stock-number"
                                >
                                    ${product.stock}
                                </span>


                                <span
                                    class="stock-label ${stockClass(product.stock)}"
                                >
                                    ${stockStatus(
                                        product.stock
                                    )}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="product-status ${statusClass(product.status)}"
                                >
                                    ${escapeHtml(
                                        product.status
                                    )}
                                </span>

                            </td>


                            <td>

                                ${escapeHtml(
                                    product.updated
                                )}

                            </td>


                            <td>

                                <div
                                    class="product-action-wrap"
                                >

                                    <button
                                        class="product-action-btn view-product"
                                        type="button"
                                        data-id="${escapeHtml(product.id)}"
                                        title="View product"
                                    >

                                        <i
                                            class="fa-regular fa-eye"
                                        ></i>

                                    </button>


                                    <button
                                        class="product-action-btn edit-product"
                                        type="button"
                                        data-id="${escapeHtml(product.id)}"
                                        title="Edit product"
                                    >

                                        <i
                                            class="fa-solid fa-pen"
                                        ></i>

                                    </button>


                                    <button
                                        class="product-action-btn delete delete-product"
                                        type="button"
                                        data-id="${escapeHtml(product.id)}"
                                        title="Delete product"
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
                    "productsTable"
                )
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredProducts.length} product${
                    filteredProducts.length ===
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
                    filteredProducts.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredProducts.length} products`;


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


    productsBody.addEventListener(
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
       PRODUCT ACTIONS
    ========================================================= */

    productsBody.addEventListener(
        "click",
        event => {

            const viewButton =
                event.target.closest(
                    ".view-product"
                );

            const editButton =
                event.target.closest(
                    ".edit-product"
                );

            const deleteButton =
                event.target.closest(
                    ".delete-product"
                );


            if(viewButton){

                const product =
                    products.find(
                        item =>
                            item.id ===
                            viewButton.dataset.id
                    );


                if(product){

                    showToast(
                        `${product.name} selected.`
                    );

                }

                return;

            }


            if(editButton){

                const product =
                    products.find(
                        item =>
                            item.id ===
                            editButton.dataset.id
                    );


                if(product){

                    showToast(
                        `Edit ${product.name} is ready to connect.`
                    );

                }

                return;

            }


            if(deleteButton){

                const product =
                    products.find(
                        item =>
                            item.id ===
                            deleteButton.dataset.id
                    );


                if(!product){
                    return;
                }


                const confirmed =
                    window.confirm(
                        `Delete ${product.name}?`
                    );


                if(confirmed){

                    showToast(
                        `${product.name} marked for deletion.`
                    );

                }

            }

        }
    );


    /* =========================================================
       SEARCH SYNC
    ========================================================= */

    [
        globalSearch,
        productSearch
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

                        productSearch.value =
                            globalSearch.value;

                    }


                    if(
                        input ===
                        productSearch
                    ){

                        globalSearch.value =
                            productSearch.value;

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


    statusFilter.addEventListener(
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

            productSearch.value = "";

            categoryFilter.value =
                "all";

            stockFilter.value =
                "all";

            statusFilter.value =
                "all";


            applyFilters();


            showToast(
                "Product filters cleared."
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
                        filteredProducts.length /
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
       BULK PUBLISH
    ========================================================= */

    document
        .getElementById(
            "publishSelectedBtn"
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
                        "Select at least one product first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} product${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready to publish.`
                );

            }
        );


    /* =========================================================
       BULK ARCHIVE
    ========================================================= */

    document
        .getElementById(
            "archiveSelectedBtn"
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
                        "Select at least one product first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} product${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } ready to archive.`
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
                        "Select at least one product first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} product${
                        selected.length ===
                        1
                            ? ""
                            : "s"
                    } selected for deletion.`
                );

            }
        );


    /* =========================================================
       EXPORT
    ========================================================= */

    document
        .getElementById(
            "exportProductsBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Product ID",
                    "Product",
                    "SKU",
                    "Category",
                    "Price",
                    "MRP",
                    "Stock",
                    "Stock Status",
                    "Status",
                    "Updated"

                ];


                const rows =
                    filteredProducts.map(
                        product => [

                            product.id,
                            product.name,
                            product.sku,
                            product.category,
                            formatCurrency(
                                product.price
                            ),
                            formatCurrency(
                                product.mrp
                            ),
                            product.stock,
                            stockStatus(
                                product.stock
                            ),
                            product.status,
                            product.updated

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
                    "ozzo-products.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Products exported successfully."
                );

            }
        );


    /* =========================================================
       PRODUCT MODAL
    ========================================================= */

    const modalElement =
        document.getElementById(
            "productModal"
        );


    const openProductModal =
        () => {

            bootstrap.Modal
                .getOrCreateInstance(
                    modalElement
                )
                .show();

        };


    document
        .getElementById(
            "openProductModal"
        )
        .addEventListener(
            "click",
            openProductModal
        );


    document
        .getElementById(
            "openProductModal2"
        )
        .addEventListener(
            "click",
            openProductModal
        );


    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    productForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "productName"
                ).value.trim();


            const sku =
                document.getElementById(
                    "productSku"
                ).value.trim();


            if(
                !name ||
                !sku
            ){

                showToast(
                    "Please complete the required fields."
                );

                return;

            }


            const modal =
                bootstrap.Modal
                    .getInstance(
                        modalElement
                    );


            modal?.hide();


            productForm.reset();


            showToast(
                `${name} saved successfully.`
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
       DESKTOP RESET
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