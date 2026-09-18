document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO CATEGORY DATA
    ========================================================= */

    const categories = [

        {
            id:"cat-001",
            name:"Fashion",
            slug:"fashion",
            description:"Clothing and everyday lifestyle wear.",
            products:15,
            subcategories:4,
            featured:"Featured",
            status:"Active",
            updated:"18 Sep 2026",
            icon:"fa-shirt",
            iconClass:"fashion"
        },

        {
            id:"cat-002",
            name:"Books",
            slug:"books",
            description:"Fiction, self-help and academic books.",
            products:12,
            subcategories:3,
            featured:"Featured",
            status:"Active",
            updated:"17 Sep 2026",
            icon:"fa-book-open",
            iconClass:"books"
        },

        {
            id:"cat-003",
            name:"Stationery",
            slug:"stationery",
            description:"Notebooks, pens and everyday stationery.",
            products:11,
            subcategories:4,
            featured:"Featured",
            status:"Active",
            updated:"16 Sep 2026",
            icon:"fa-pen",
            iconClass:"stationery"
        },

        {
            id:"cat-004",
            name:"Pads & Personal Care",
            slug:"pads-personal-care",
            description:"Personal care and hygiene essentials.",
            products:8,
            subcategories:2,
            featured:"Standard",
            status:"Active",
            updated:"15 Sep 2026",
            icon:"fa-heart",
            iconClass:"personal"
        }

    ];


    /* =========================================================
       ELEMENTS
    ========================================================= */

    const body =
        document.getElementById(
            "categoriesBody"
        );

    const globalSearch =
        document.getElementById(
            "globalCategorySearch"
        );

    const categorySearch =
        document.getElementById(
            "categorySearch"
        );

    const statusFilter =
        document.getElementById(
            "categoryStatus"
        );

    const featuredFilter =
        document.getElementById(
            "featuredFilter"
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

    const categoryForm =
        document.getElementById(
            "categoryForm"
        );

    const categoryModal =
        document.getElementById(
            "categoryModal"
        );


    /* =========================================================
       STATE
    ========================================================= */

    let filteredCategories =
        [...categories];

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


    const statusClass =
        status =>
            status.toLowerCase();


    const featuredClass =
        featured =>
            featured.toLowerCase();


    /* =========================================================
       SUMMARY
    ========================================================= */

    const updateSummary =
        () => {

            const active =
                categories.filter(
                    item =>
                        item.status ===
                        "Active"
                ).length;


            const products =
                categories.reduce(
                    (
                        total,
                        item
                    ) =>
                        total +
                        item.products,
                    0
                );


            const featured =
                categories.filter(
                    item =>
                        item.featured ===
                        "Featured"
                ).length;


            document.getElementById(
                "totalCategoriesCount"
            ).textContent =
                categories.length;


            document.getElementById(
                "activeCategoriesCount"
            ).textContent =
                active;


            document.getElementById(
                "categoryProductsCount"
            ).textContent =
                products;


            document.getElementById(
                "featuredCategoriesCount"
            ).textContent =
                featured;

        };


    /* =========================================================
       SEARCH
    ========================================================= */

    const getSearchQuery =
        () => {

            const first =
                globalSearch?.value.trim()
                || "";

            const second =
                categorySearch?.value.trim()
                || "";

            return `${first} ${second}`
                .trim()
                .toLowerCase();

        };


    /* =========================================================
       FILTERS
    ========================================================= */

    const applyFilters =
        () => {

            const query =
                getSearchQuery();

            const selectedStatus =
                statusFilter.value;

            const selectedFeatured =
                featuredFilter.value;


            filteredCategories =
                categories.filter(
                    item => {

                        const searchable = `

                            ${item.id}
                            ${item.name}
                            ${item.slug}
                            ${item.description}

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

                            item.status ===
                                selectedStatus;


                        const featuredMatch =
                            selectedFeatured ===
                                "all"

                            ||

                            item.featured ===
                                selectedFeatured;


                        return (
                            searchMatch &&
                            statusMatch &&
                            featuredMatch
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
                        filteredCategories.length /
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
                filteredCategories.slice(
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
                                    aria-label="Select ${escapeHtml(item.name)}"
                                >

                            </td>


                            <td>

                                <div
                                    class="category-cell"
                                >

                                    <div
                                        class="category-icon ${escapeHtml(item.iconClass)}"
                                    >

                                        <i
                                            class="fa-solid ${escapeHtml(item.icon)}"
                                        ></i>

                                    </div>


                                    <div>

                                        <span
                                            class="category-name"
                                        >
                                            ${escapeHtml(
                                                item.name
                                            )}
                                        </span>


                                        <span
                                            class="category-description"
                                        >
                                            ${escapeHtml(
                                                item.description
                                            )}
                                        </span>

                                    </div>

                                </div>

                            </td>


                            <td>

                                <span
                                    class="category-slug"
                                >
                                    /${escapeHtml(
                                        item.slug
                                    )}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="category-product-count"
                                >
                                    ${item.products}
                                </span>


                                <span
                                    class="category-product-label"
                                >
                                    products
                                </span>

                            </td>


                            <td>

                                <span
                                    class="subcategory-count"
                                >
                                    ${item.subcategories}
                                </span>

                            </td>


                            <td>

                                <span
                                    class="featured-pill ${featuredClass(item.featured)}"
                                >

                                    ${escapeHtml(
                                        item.featured
                                    )}

                                </span>

                            </td>


                            <td>

                                <span
                                    class="category-status ${statusClass(item.status)}"
                                >

                                    ${escapeHtml(
                                        item.status
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
                                    class="category-action-wrap"
                                >

                                    <button
                                        class="category-action-btn view-category"
                                        type="button"
                                        data-id="${escapeHtml(item.id)}"
                                        title="View category"
                                    >

                                        <i
                                            class="fa-regular fa-eye"
                                        ></i>

                                    </button>


                                    <button
                                        class="category-action-btn edit-category"
                                        type="button"
                                        data-id="${escapeHtml(item.id)}"
                                        title="Edit category"
                                    >

                                        <i
                                            class="fa-solid fa-pen"
                                        ></i>

                                    </button>


                                    <button
                                        class="category-action-btn delete delete-category"
                                        type="button"
                                        data-id="${escapeHtml(item.id)}"
                                        title="Delete category"
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
                    "categoriesTable"
                )
                .classList.toggle(
                    "d-none",
                    !hasRows
                );


            resultLabel.textContent =
                `${filteredCategories.length} categor${
                    filteredCategories.length ===
                    1
                        ? "y"
                        : "ies"
                } found`;


            const from =
                hasRows
                    ? start + 1
                    : 0;


            const to =
                Math.min(
                    start + pageSize,
                    filteredCategories.length
                );


            footerResult.textContent =
                `Showing ${from}–${to} of ${filteredCategories.length} categories`;


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
                    checkbox =>
                        checkbox.checked
                ).length;


            selectAll.checked =
                boxes.length > 0 &&
                checked ===
                    boxes.length;


            updateSelection();

        }
    );


    /* =========================================================
       CATEGORY ACTIONS
    ========================================================= */

    body.addEventListener(
        "click",
        event => {

            const viewButton =
                event.target.closest(
                    ".view-category"
                );


            const editButton =
                event.target.closest(
                    ".edit-category"
                );


            const deleteButton =
                event.target.closest(
                    ".delete-category"
                );


            if(viewButton){

                const item =
                    categories.find(
                        category =>
                            category.id ===
                            viewButton.dataset.id
                    );


                if(item){

                    showToast(
                        `${item.name}: ${item.products} products assigned.`
                    );

                }

                return;

            }


            if(editButton){

                const item =
                    categories.find(
                        category =>
                            category.id ===
                            editButton.dataset.id
                    );


                if(item){

                    showToast(
                        `Edit ${item.name} is ready to connect.`
                    );

                }

                return;

            }


            if(deleteButton){

                const item =
                    categories.find(
                        category =>
                            category.id ===
                            deleteButton.dataset.id
                    );


                if(!item){
                    return;
                }


                const confirmed =
                    window.confirm(
                        `Delete ${item.name}?`
                    );


                if(confirmed){

                    showToast(
                        `${item.name} marked for deletion.`
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
        categorySearch
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

                            categorySearch.value =
                                globalSearch.value;

                        }


                        if(
                            input ===
                            categorySearch
                        ){

                            globalSearch.value =
                                categorySearch.value;

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


    featuredFilter.addEventListener(
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

            categorySearch.value =
                "";

            statusFilter.value =
                "all";

            featuredFilter.value =
                "all";


            applyFilters();


            showToast(
                "Category filters cleared."
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
                        filteredCategories.length /
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
                        "Select at least one category first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} categor${
                        selected.length ===
                        1
                            ? "y"
                            : "ies"
                    } ready to activate.`
                );

            }
        );


    /* =========================================================
       BULK HIDE
    ========================================================= */

    document
        .getElementById(
            "hideSelectedBtn"
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
                        "Select at least one category first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} categor${
                        selected.length ===
                        1
                            ? "y"
                            : "ies"
                    } ready to hide.`
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
                        "Select at least one category first."
                    );

                    return;

                }


                showToast(
                    `${selected.length} categor${
                        selected.length ===
                        1
                            ? "y"
                            : "ies"
                    } selected for deletion.`
                );

            }
        );


    /* =========================================================
       EXPORT CSV
    ========================================================= */

    document
        .getElementById(
            "exportCategoriesBtn"
        )
        .addEventListener(
            "click",
            () => {

                const headers = [

                    "Category ID",
                    "Category",
                    "Slug",
                    "Products",
                    "Subcategories",
                    "Featured",
                    "Status",
                    "Updated"

                ];


                const rows =
                    filteredCategories.map(
                        item => [

                            item.id,
                            item.name,
                            item.slug,
                            item.products,
                            item.subcategories,
                            item.featured,
                            item.status,
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
                    "ozzo-categories.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Categories exported successfully."
                );

            }
        );


    /* =========================================================
       CATEGORY MODAL
    ========================================================= */

    const openCategoryModal =
        () => {

            bootstrap.Modal
                .getOrCreateInstance(
                    categoryModal
                )
                .show();

        };


    document
        .getElementById(
            "openCategoryModal"
        )
        .addEventListener(
            "click",
            openCategoryModal
        );


    document
        .getElementById(
            "openCategoryModal2"
        )
        .addEventListener(
            "click",
            openCategoryModal
        );


    /* =========================================================
       AUTO SLUG
    ========================================================= */

    const categoryNameInput =
        document.getElementById(
            "categoryName"
        );

    const categorySlugInput =
        document.getElementById(
            "categorySlug"
        );


    categoryNameInput.addEventListener(
        "input",
        () => {

            categorySlugInput.value =
                categoryNameInput.value

                    .trim()

                    .toLowerCase()

                    .replace(
                        /[^a-z0-9]+/g,
                        "-"
                    )

                    .replace(
                        /^-+|-+$/g,
                        ""
                    );

        }
    );


    /* =========================================================
       FORM SUBMIT
    ========================================================= */

    categoryForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                categoryNameInput.value.trim();


            const slug =
                categorySlugInput.value.trim();


            if(
                !name ||
                !slug
            ){

                showToast(
                    "Please complete the required fields."
                );

                return;

            }


            bootstrap.Modal
                .getInstance(
                    categoryModal
                )
                ?.hide();


            categoryForm.reset();


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