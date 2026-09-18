/* =========================================================
   OZZO BANNERS
   STANDALONE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
    ===================================================== */

    let banners = [

        {
            id:1,
            name:"Fashion Fest",
            campaign:"Festive Fashion Sale",
            placement:"Homepage Hero",
            category:"Fashion",
            views:28420,
            clicks:5240,
            expiry:"2026-09-30",
            status:"Active",
            image:"",
            headline:"Up to 40% Off Fashion",
            link:"Products.html"
        },

        {
            id:2,
            name:"Book Lovers",
            campaign:"Weekend Book Sale",
            placement:"Category",
            category:"Books",
            views:21860,
            clicks:3910,
            expiry:"2026-09-28",
            status:"Active",
            image:"",
            headline:"Discover Your Next Great Book",
            link:"Books.html"
        },

        {
            id:3,
            name:"Back To School",
            campaign:"School Essentials",
            placement:"Promotion",
            category:"Stationery",
            views:18240,
            clicks:3280,
            expiry:"2026-10-05",
            status:"Active",
            image:"",
            headline:"Everything For A Fresh Start",
            link:"Stationery.html"
        },

        {
            id:4,
            name:"Care Essentials",
            campaign:"Personal Care Week",
            placement:"Promotion",
            category:"Pads & Personal Care",
            views:14980,
            clicks:2640,
            expiry:"2026-10-10",
            status:"Active",
            image:"",
            headline:"Comfort Meets Everyday Care",
            link:"Pads.html"
        },

        {
            id:5,
            name:"Mega Store Sale",
            campaign:"Everything For Everyone",
            placement:"Homepage Hero",
            category:"All Products",
            views:12640,
            clicks:2180,
            expiry:"2026-10-15",
            status:"Scheduled",
            image:"",
            headline:"Big Savings Across OZZO",
            link:"index.html"
        },

        {
            id:6,
            name:"Weekend Wardrobe",
            campaign:"Fashion Weekend",
            placement:"Category",
            category:"Fashion",
            views:9820,
            clicks:1840,
            expiry:"2026-09-24",
            status:"Paused",
            image:"",
            headline:"Refresh Your Wardrobe",
            link:"Fashion.html"
        },

        {
            id:7,
            name:"Readers Choice",
            campaign:"Book Carnival",
            placement:"Popup",
            category:"Books",
            views:7420,
            clicks:1120,
            expiry:"2026-09-20",
            status:"Expired",
            image:"",
            headline:"Books You'll Love",
            link:"Books.html"
        },

        {
            id:8,
            name:"Easy Shopping",
            campaign:"Free Delivery",
            placement:"Popup",
            category:"All Products",
            views:6280,
            clicks:940,
            expiry:"2026-10-20",
            status:"Active",
            image:"",
            headline:"Shop More, Deliver Faster",
            link:"index.html"
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const bannersBody =
        document.getElementById("bannersBody");

    const bannerSearch =
        document.getElementById("bannerSearch");

    const bannerSearchTop =
        document.getElementById("bannerSearchTop");

    const bannerStatus =
        document.getElementById("bannerStatus");

    const bannerPlacement =
        document.getElementById("bannerPlacement");

    const bannerCategory =
        document.getElementById("bannerCategory");

    const clearBannerFilters =
        document.getElementById("clearBannerFilters");

    const resultLabel =
        document.getElementById("resultLabel");

    const footerResult =
        document.getElementById("footerResult");

    const selectedCount =
        document.getElementById("selectedCount");

    const selectAll =
        document.getElementById("selectAll");

    const prevPage =
        document.getElementById("prevPage");

    const nextPage =
        document.getElementById("nextPage");

    const currentPage =
        document.getElementById("currentPage");

    const addBannerBtn =
        document.getElementById("addBannerBtn");

    const bannerForm =
        document.getElementById("bannerForm");

    const bannerModalElement =
        document.getElementById("bannerModal");

    const bannerModal =
        new bootstrap.Modal(
            bannerModalElement
        );

    const previewModalElement =
        document.getElementById("previewModal");

    const previewModal =
        new bootstrap.Modal(
            previewModalElement
        );

    const bannerModalTitle =
        document.getElementById("bannerModalTitle");

    const editBannerId =
        document.getElementById("editBannerId");

    const bannerName =
        document.getElementById("bannerName");

    const bannerCampaign =
        document.getElementById("bannerCampaign");

    const bannerPlacementInput =
        document.getElementById(
            "bannerPlacementInput"
        );

    const bannerCategoryInput =
        document.getElementById(
            "bannerCategoryInput"
        );

    const bannerStatusInput =
        document.getElementById(
            "bannerStatusInput"
        );

    const bannerLink =
        document.getElementById("bannerLink");

    const bannerExpiry =
        document.getElementById("bannerExpiry");

    const bannerImage =
        document.getElementById("bannerImage");

    const bannerHeadline =
        document.getElementById("bannerHeadline");

    const adminToast =
        document.getElementById("adminToast");


    /* =====================================================
       STATE
    ===================================================== */

    let filteredBanners =
        [...banners];

    let page = 1;

    const pageSize = 5;


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message){

        adminToast.textContent =
            message;

        adminToast.classList.add(
            "show"
        );

        clearTimeout(
            window.ozzoBannerToast
        );

        window.ozzoBannerToast =
            setTimeout(() => {

                adminToast.classList.remove(
                    "show"
                );

            },2200);

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    function formatNumber(number){

        return Number(number || 0)
            .toLocaleString("en-IN");

    }


    function formatDate(dateString){

        if(!dateString){
            return "-";
        }

        const date =
            new Date(
                `${dateString}T00:00:00`
            );

        return date.toLocaleDateString(
            "en-IN",
            {
                day:"2-digit",
                month:"short",
                year:"numeric"
            }
        );

    }


    function statusClass(status){

        return status
            .toLowerCase()
            .replace(/\s+/g,"-");

    }


    function categoryClass(category){

        if(category === "Fashion"){
            return "fashion";
        }

        if(category === "Books"){
            return "books";
        }

        if(category === "Stationery"){
            return "stationery";
        }

        if(category === "Pads & Personal Care"){
            return "pads";
        }

        return "";
    }


    /* =====================================================
       RENDER TABLE
    ===================================================== */

    function renderBanners(){

        const start =
            (page - 1) * pageSize;

        const end =
            start + pageSize;

        const pageItems =
            filteredBanners.slice(
                start,
                end
            );


        bannersBody.innerHTML = "";


        if(!filteredBanners.length){

            document
                .getElementById("emptyState")
                .classList.remove(
                    "d-none"
                );

            resultLabel.textContent =
                "0 banners found";

            footerResult.textContent =
                "Showing 0 of 0 banners";

            currentPage.textContent =
                "1";

            prevPage.disabled = true;
            nextPage.disabled = true;

            updateSelectionCount();

            return;

        }


        document
            .getElementById("emptyState")
            .classList.add(
                "d-none"
            );


        pageItems.forEach(banner => {

            const row =
                document.createElement("tr");


            row.dataset.id =
                banner.id;


            const categoryStyle =
                categoryClass(
                    banner.category
                );


            row.innerHTML = `

                <td>

                    <input
                        type="checkbox"
                        class="banner-check"
                        value="${banner.id}"
                        aria-label="Select ${banner.name}"
                    >

                </td>


                <td>

                    <div class="banner-cell">

                        <div
                            class="banner-table-preview ${categoryStyle}"
                        >
                            ${banner.category.toUpperCase()}
                        </div>

                        <div class="banner-cell-info">

                            <span class="banner-main">
                                ${banner.name}
                            </span>

                            <span class="banner-sub">
                                ${banner.campaign}
                            </span>

                        </div>

                    </div>

                </td>


                <td>

                    <span class="banner-placement">
                        ${banner.placement}
                    </span>

                </td>


                <td>

                    <span class="banner-category">
                        ${banner.category}
                    </span>

                </td>


                <td>

                    <strong class="banner-metric">
                        ${formatNumber(banner.views)}
                    </strong>

                    <span class="banner-metric-sub">
                        views
                    </span>

                </td>


                <td>

                    <strong class="banner-metric">
                        ${formatNumber(banner.clicks)}
                    </strong>

                    <span class="banner-metric-sub">
                        clicks
                    </span>

                </td>


                <td>
                    ${formatDate(banner.expiry)}
                </td>


                <td>

                    <span
                        class="banner-status ${statusClass(banner.status)}"
                    >
                        ${banner.status}
                    </span>

                </td>


                <td>

                    <div class="banner-action-wrap">

                        <button
                            class="banner-view-btn"
                            type="button"
                            data-view="${banner.id}"
                            title="Preview banner"
                            aria-label="Preview ${banner.name}"
                        >

                            <i class="fa-regular fa-eye"></i>

                        </button>


                        <button
                            class="banner-edit-btn"
                            type="button"
                            data-edit="${banner.id}"
                            title="Edit banner"
                            aria-label="Edit ${banner.name}"
                        >

                            <i class="fa-solid fa-pen"></i>

                        </button>

                    </div>

                </td>

            `;


            bannersBody.appendChild(
                row
            );

        });


        resultLabel.textContent =
            `${filteredBanners.length} banner${filteredBanners.length === 1 ? "" : "s"} found`;


        footerResult.textContent =
            `Showing ${start + 1}–${Math.min(end, filteredBanners.length)} of ${filteredBanners.length} banners`;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredBanners.length /
                    pageSize
                )
            );


        currentPage.textContent =
            page;


        prevPage.disabled =
            page <= 1;


        nextPage.disabled =
            page >= totalPages;


        updateSelectionCount();

        bindCheckboxes();

    }


    /* =====================================================
       FILTERS
    ===================================================== */

    function applyFilters(){

        const search =
            bannerSearch.value
                .trim()
                .toLowerCase();


        const status =
            bannerStatus.value;


        const placement =
            bannerPlacement.value;


        const category =
            bannerCategory.value;


        filteredBanners =
            banners.filter(banner => {

                const matchesSearch =
                    !search ||
                    banner.name
                        .toLowerCase()
                        .includes(search) ||
                    banner.campaign
                        .toLowerCase()
                        .includes(search);


                const matchesStatus =
                    status === "all" ||
                    banner.status === status;


                const matchesPlacement =
                    placement === "all" ||
                    banner.placement === placement;


                const matchesCategory =
                    category === "all" ||
                    banner.category === category;


                return (
                    matchesSearch &&
                    matchesStatus &&
                    matchesPlacement &&
                    matchesCategory
                );

            });


        filteredBanners.sort(
            (a,b) =>
                b.id - a.id
        );


        page = 1;

        renderBanners();

    }


    /* =====================================================
       SEARCH SYNC
    ===================================================== */

    bannerSearch.addEventListener(
        "input",
        () => {

            bannerSearchTop.value =
                bannerSearch.value;

            applyFilters();

        }
    );


    bannerSearchTop.addEventListener(
        "input",
        () => {

            bannerSearch.value =
                bannerSearchTop.value;

            applyFilters();

        }
    );


    bannerStatus.addEventListener(
        "change",
        applyFilters
    );


    bannerPlacement.addEventListener(
        "change",
        applyFilters
    );


    bannerCategory.addEventListener(
        "change",
        applyFilters
    );


    /* =====================================================
       CLEAR
    ===================================================== */

    clearBannerFilters.addEventListener(
        "click",
        () => {

            bannerSearch.value = "";

            bannerSearchTop.value = "";

            bannerStatus.value =
                "all";

            bannerPlacement.value =
                "all";

            bannerCategory.value =
                "all";

            applyFilters();

            showToast(
                "Filters cleared"
            );

        }
    );


    /* =====================================================
       PAGINATION
    ===================================================== */

    prevPage.addEventListener(
        "click",
        () => {

            if(page > 1){

                page--;

                renderBanners();

            }

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.ceil(
                    filteredBanners.length /
                    pageSize
                );


            if(page < totalPages){

                page++;

                renderBanners();

            }

        }
    );


    /* =====================================================
       CHECKBOXES
    ===================================================== */

    function getSelectedIds(){

        return [
            ...document.querySelectorAll(
                ".banner-check:checked"
            )
        ].map(
            checkbox =>
                Number(checkbox.value)
        );

    }


    function updateSelectionCount(){

        const selected =
            getSelectedIds();


        selectedCount.textContent =
            `${selected.length} selected`;


        const allChecks =
            document.querySelectorAll(
                ".banner-check"
            );


        const checked =
            document.querySelectorAll(
                ".banner-check:checked"
            );


        selectAll.checked =
            allChecks.length > 0 &&
            allChecks.length ===
            checked.length;

    }


    function bindCheckboxes(){

        document
            .querySelectorAll(
                ".banner-check"
            )
            .forEach(checkbox => {

                checkbox.addEventListener(
                    "change",
                    updateSelectionCount
                );

            });

    }


    selectAll.addEventListener(
        "change",
        () => {

            document
                .querySelectorAll(
                    ".banner-check"
                )
                .forEach(
                    checkbox => {

                        checkbox.checked =
                            selectAll.checked;

                    }
                );


            updateSelectionCount();

        }
    );


    /* =====================================================
       ACTIVATE
    ===================================================== */

    document
        .getElementById(
            "activateSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one banner"
                    );

                    return;

                }


                banners.forEach(
                    banner => {

                        if(
                            ids.includes(
                                banner.id
                            )
                        ){

                            banner.status =
                                "Active";

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} banner${ids.length > 1 ? "s" : ""} activated`
                );

            }
        );


    /* =====================================================
       PAUSE
    ===================================================== */

    document
        .getElementById(
            "pauseSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one banner"
                    );

                    return;

                }


                banners.forEach(
                    banner => {

                        if(
                            ids.includes(
                                banner.id
                            )
                        ){

                            banner.status =
                                "Paused";

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} banner${ids.length > 1 ? "s" : ""} paused`
                );

            }
        );


    /* =====================================================
       DELETE
    ===================================================== */

    document
        .getElementById(
            "deleteSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one banner"
                    );

                    return;

                }


                const confirmed =
                    window.confirm(
                        `Delete ${ids.length} selected banner${ids.length > 1 ? "s" : ""}?`
                    );


                if(!confirmed){
                    return;
                }


                banners =
                    banners.filter(
                        banner =>
                            !ids.includes(
                                banner.id
                            )
                    );


                applyFilters();


                showToast(
                    "Selected banners deleted"
                );

            }
        );


    /* =====================================================
       EXPORT
    ===================================================== */

    document
        .getElementById(
            "exportBannersBtn"
        )
        .addEventListener(
            "click",
            () => {

                if(!filteredBanners.length){

                    showToast(
                        "No banners to export"
                    );

                    return;

                }


                const headers = [

                    "Banner",
                    "Campaign",
                    "Placement",
                    "Category",
                    "Views",
                    "Clicks",
                    "Expiry",
                    "Status",
                    "Headline",
                    "Link"

                ];


                const rows =
                    filteredBanners.map(
                        banner => [

                            banner.name,
                            banner.campaign,
                            banner.placement,
                            banner.category,
                            banner.views,
                            banner.clicks,
                            banner.expiry,
                            banner.status,
                            banner.headline,
                            banner.link

                        ]
                    );


                const csv = [

                    headers,
                    ...rows

                ]
                .map(
                    row =>
                        row
                            .map(
                                value =>
                                    `"${String(value)
                                        .replace(/"/g,'""')}"`
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
                    "ozzo-banners.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Banner report exported"
                );

            }
        );


    /* =====================================================
       ADD BANNER
    ===================================================== */

    addBannerBtn.addEventListener(
        "click",
        () => {

            bannerForm.reset();

            editBannerId.value =
                "";

            bannerModalTitle.textContent =
                "Create Banner";

            bannerPlacementInput.value =
                "Homepage Hero";

            bannerCategoryInput.value =
                "All Products";

            bannerStatusInput.value =
                "Active";

            bannerModal.show();

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ===================================================== */

    bannersBody.addEventListener(
        "click",
        event => {

            const editButton =
                event.target.closest(
                    "[data-edit]"
                );


            const viewButton =
                event.target.closest(
                    "[data-view]"
                );


            if(editButton){

                const id =
                    Number(
                        editButton.dataset.edit
                    );

                openEditBanner(id);

            }


            if(viewButton){

                const id =
                    Number(
                        viewButton.dataset.view
                    );

                previewBanner(id);

            }

        }
    );


    /* =====================================================
       EDIT
    ===================================================== */

    function openEditBanner(id){

        const banner =
            banners.find(
                item =>
                    item.id === id
            );


        if(!banner){
            return;
        }


        editBannerId.value =
            banner.id;


        bannerName.value =
            banner.name;


        bannerCampaign.value =
            banner.campaign;


        bannerPlacementInput.value =
            banner.placement;


        bannerCategoryInput.value =
            banner.category;


        bannerStatusInput.value =
            banner.status === "Expired"
                ? "Paused"
                : banner.status;


        bannerLink.value =
            banner.link;


        bannerExpiry.value =
            banner.expiry;


        bannerImage.value =
            banner.image;


        bannerHeadline.value =
            banner.headline;


        bannerModalTitle.textContent =
            "Edit Banner";


        bannerModal.show();

    }


    /* =====================================================
       PREVIEW
    ===================================================== */

    function previewBanner(id){

        const banner =
            banners.find(
                item =>
                    item.id === id
            );


        if(!banner){
            return;
        }


        document.getElementById(
            "previewTitle"
        ).textContent =
            banner.name;


        document.getElementById(
            "previewCategory"
        ).textContent =
            banner.category.toUpperCase();


        document.getElementById(
            "previewHeadline"
        ).textContent =
            banner.headline ||
            banner.name;


        document.getElementById(
            "previewCampaign"
        ).textContent =
            banner.campaign;


        document.getElementById(
            "previewPlacement"
        ).textContent =
            banner.placement;


        document.getElementById(
            "previewViews"
        ).textContent =
            formatNumber(
                banner.views
            );


        document.getElementById(
            "previewClicks"
        ).textContent =
            formatNumber(
                banner.clicks
            );


        const preview =
            document.getElementById(
                "previewBanner"
            );


        const category =
            categoryClass(
                banner.category
            );


        preview.className =
            `preview-banner ${category}`;


        if(banner.image){

            preview.style.backgroundImage =
                `
                linear-gradient(
                    90deg,
                    rgba(13,29,45,.78),
                    rgba(13,29,45,.30)
                ),
                url("${banner.image}")
                `;

            preview.style.backgroundSize =
                "cover";

            preview.style.backgroundPosition =
                "center";

        }

        else{

            preview.style.backgroundImage =
                "";

        }


        previewModal.show();

    }


    /* =====================================================
       SAVE
    ===================================================== */

    bannerForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                Number(
                    editBannerId.value
                );


            const name =
                bannerName.value.trim();


            const campaign =
                bannerCampaign.value.trim();


            const placement =
                bannerPlacementInput.value;


            const category =
                bannerCategoryInput.value;


            const status =
                bannerStatusInput.value;


            const link =
                bannerLink.value.trim();


            const expiry =
                bannerExpiry.value;


            const image =
                bannerImage.value.trim();


            const headline =
                bannerHeadline.value.trim();


            if(
                !name ||
                !campaign ||
                !expiry
            ){

                showToast(
                    "Please complete the required fields"
                );

                return;

            }


            if(id){

                const banner =
                    banners.find(
                        item =>
                            item.id === id
                    );


                if(banner){

                    banner.name =
                        name;

                    banner.campaign =
                        campaign;

                    banner.placement =
                        placement;

                    banner.category =
                        category;

                    banner.status =
                        status;

                    banner.link =
                        link;

                    banner.expiry =
                        expiry;

                    banner.image =
                        image;

                    banner.headline =
                        headline ||
                        name;

                }


                showToast(
                    `${name} updated successfully`
                );

            }

            else{

                banners.unshift({

                    id:
                        Date.now(),

                    name,

                    campaign,

                    placement,

                    category,

                    views:0,

                    clicks:0,

                    expiry,

                    status,

                    image,

                    headline:
                        headline ||
                        name,

                    link

                });


                showToast(
                    `${name} created successfully`
                );

            }


            bannerModal.hide();

            applyFilters();

        }
    );


    /* =====================================================
       SIDEBAR
    ===================================================== */

    const mobileMenuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );


    const adminSidebar =
        document.getElementById(
            "adminSidebar"
        );


    const sidebarOverlay =
        document.getElementById(
            "sidebarOverlay"
        );


    function openSidebar(){

        adminSidebar.classList.add(
            "show"
        );

        sidebarOverlay.classList.add(
            "show"
        );

    }


    function closeSidebar(){

        adminSidebar.classList.remove(
            "show"
        );

        sidebarOverlay.classList.remove(
            "show"
        );

    }


    mobileMenuBtn.addEventListener(
        "click",
        openSidebar
    );


    sidebarOverlay.addEventListener(
        "click",
        closeSidebar
    );


    document
        .querySelectorAll(
            ".admin-nav-link"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    if(
                        window.innerWidth <= 991
                    ){

                        closeSidebar();

                    }

                }
            );

        });


    /* =====================================================
       NOTIFICATIONS
    ===================================================== */

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


    function toggleNotifications(){

        notificationPanel.classList.toggle(
            "show"
        );

    }


    notificationBtn?.addEventListener(
        "click",
        toggleNotifications
    );


    mobileNotificationBtn?.addEventListener(
        "click",
        toggleNotifications
    );


    closeNotifications?.addEventListener(
        "click",
        () => {

            notificationPanel.classList.remove(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        event => {

            const clickedInside =
                notificationPanel.contains(
                    event.target
                ) ||
                notificationBtn?.contains(
                    event.target
                ) ||
                mobileNotificationBtn?.contains(
                    event.target
                );


            if(
                !clickedInside &&
                notificationPanel.classList.contains(
                    "show"
                )
            ){

                notificationPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       LOGOUT
    ===================================================== */

    document
        .getElementById(
            "logoutBtn"
        )
        ?.addEventListener(
            "click",
            () => {

                const confirmed =
                    window.confirm(
                        "Are you sure you want to logout?"
                    );


                if(confirmed){

                    showToast(
                        "Logout action triggered"
                    );

                }

            }
        );


    /* =====================================================
       INITIAL
    ===================================================== */

    applyFilters();

});