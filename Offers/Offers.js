/* =========================================================
   OZZO OFFERS
   STANDALONE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
    ===================================================== */

    let offers = [

        {
            id:1,
            name:"Fashion Fest",
            campaign:"Festive Fashion Sale",
            type:"Percentage",
            category:"Fashion",
            value:"25%",
            orders:428,
            limit:1000,
            minOrder:1499,
            expiry:"2026-09-30",
            status:"Active"
        },

        {
            id:2,
            name:"Book Lovers",
            campaign:"Weekend Book Sale",
            type:"Flat",
            category:"Books",
            value:"₹150",
            orders:362,
            limit:500,
            minOrder:999,
            expiry:"2026-09-28",
            status:"Active"
        },

        {
            id:3,
            name:"Back To School",
            campaign:"School Essentials",
            type:"Percentage",
            category:"Stationery",
            value:"15%",
            orders:294,
            limit:500,
            minOrder:699,
            expiry:"2026-10-05",
            status:"Active"
        },

        {
            id:4,
            name:"Care Essentials",
            campaign:"Personal Care Week",
            type:"Buy One Get One",
            category:"Pads & Personal Care",
            value:"BOGO",
            orders:236,
            limit:400,
            minOrder:599,
            expiry:"2026-10-10",
            status:"Active"
        },

        {
            id:5,
            name:"Mega Store Sale",
            campaign:"Everything For Everyone",
            type:"Percentage",
            category:"All Products",
            value:"20%",
            orders:184,
            limit:600,
            minOrder:1999,
            expiry:"2026-10-15",
            status:"Scheduled"
        },

        {
            id:6,
            name:"Fashion Weekend",
            campaign:"Weekend Wardrobe",
            type:"Flat",
            category:"Fashion",
            value:"₹300",
            orders:152,
            limit:300,
            minOrder:1799,
            expiry:"2026-09-24",
            status:"Paused"
        },

        {
            id:7,
            name:"Book Carnival",
            campaign:"Readers Choice",
            type:"Percentage",
            category:"Books",
            value:"10%",
            orders:96,
            limit:250,
            minOrder:799,
            expiry:"2026-09-20",
            status:"Expired"
        },

        {
            id:8,
            name:"Free Delivery",
            campaign:"Easy Shopping",
            type:"Free Shipping",
            category:"All Products",
            value:"Free",
            orders:74,
            limit:250,
            minOrder:799,
            expiry:"2026-10-20",
            status:"Active"
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const offersBody =
        document.getElementById("offersBody");

    const offerSearch =
        document.getElementById("offerSearch");

    const offerSearchTop =
        document.getElementById("offerSearchTop");

    const offerStatus =
        document.getElementById("offerStatus");

    const offerType =
        document.getElementById("offerType");

    const offerCategory =
        document.getElementById("offerCategory");

    const clearOfferFilters =
        document.getElementById("clearOfferFilters");

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

    const addOfferBtn =
        document.getElementById("addOfferBtn");

    const offerForm =
        document.getElementById("offerForm");

    const offerModalElement =
        document.getElementById("offerModal");

    const offerModal =
        new bootstrap.Modal(offerModalElement);

    const offerModalTitle =
        document.getElementById("offerModalTitle");

    const editOfferId =
        document.getElementById("editOfferId");

    const offerName =
        document.getElementById("offerName");

    const offerCampaign =
        document.getElementById("offerCampaign");

    const offerTypeInput =
        document.getElementById("offerTypeInput");

    const offerValue =
        document.getElementById("offerValue");

    const offerCategoryInput =
        document.getElementById("offerCategoryInput");

    const offerMinOrder =
        document.getElementById("offerMinOrder");

    const offerMaxUsage =
        document.getElementById("offerMaxUsage");

    const offerExpiry =
        document.getElementById("offerExpiry");

    const offerStatusInput =
        document.getElementById("offerStatusInput");

    const activateSelected =
        document.getElementById("activateSelected");

    const pauseSelected =
        document.getElementById("pauseSelected");

    const deleteSelected =
        document.getElementById("deleteSelected");

    const exportOffersBtn =
        document.getElementById("exportOffersBtn");

    const adminToast =
        document.getElementById("adminToast");


    /* =====================================================
       STATE
    ===================================================== */

    let filteredOffers = [...offers];

    let page = 1;

    const pageSize = 5;


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message){

        adminToast.textContent = message;

        adminToast.classList.add("show");

        clearTimeout(window.ozzoOfferToast);

        window.ozzoOfferToast =
            setTimeout(() => {

                adminToast.classList.remove("show");

            },2200);

    }


    /* =====================================================
       HELPERS
    ===================================================== */

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


    function numericValue(value){

        const number =
            parseFloat(
                String(value)
                    .replace(/[^\d.]/g,"")
            );

        return Number.isNaN(number)
            ? 0
            : number;

    }


    /* =====================================================
       RENDER TABLE
    ===================================================== */

    function renderOffers(){

        const start =
            (page - 1) * pageSize;

        const end =
            start + pageSize;

        const pageItems =
            filteredOffers.slice(
                start,
                end
            );


        offersBody.innerHTML = "";


        if(!filteredOffers.length){

            document
                .getElementById("emptyState")
                .classList.remove("d-none");

            resultLabel.textContent =
                "0 offers found";

            footerResult.textContent =
                "Showing 0 of 0 offers";

            currentPage.textContent = "1";

            prevPage.disabled = true;
            nextPage.disabled = true;

            updateSelectionCount();

            return;

        }


        document
            .getElementById("emptyState")
            .classList.add("d-none");


        pageItems.forEach(offer => {

            const row =
                document.createElement("tr");


            row.dataset.id =
                offer.id;


            row.innerHTML = `

                <td>

                    <input
                        type="checkbox"
                        class="offer-check"
                        value="${offer.id}"
                        aria-label="Select ${offer.name}"
                    >

                </td>


                <td>

                    <span class="offer-main">
                        ${offer.name}
                    </span>

                    <span class="offer-sub">
                        ${offer.campaign}
                    </span>

                </td>


                <td>

                    <span class="offer-type">
                        ${offer.type}
                    </span>

                </td>


                <td>

                    <span class="offer-category">
                        ${offer.category}
                    </span>

                </td>


                <td>

                    <strong class="offer-value">
                        ${offer.value}
                    </strong>

                </td>


                <td>

                    <strong class="offer-orders">
                        ${offer.orders}
                    </strong>

                    <span class="offer-orders-sub">
                        of ${offer.limit}
                    </span>

                </td>


                <td>

                    ${formatDate(offer.expiry)}

                </td>


                <td>

                    <span
                        class="offer-status ${statusClass(offer.status)}"
                    >
                        ${offer.status}
                    </span>

                </td>


                <td>

                    <div class="offer-action-wrap">


                        <button
                            class="offer-view-btn"
                            type="button"
                            data-view="${offer.id}"
                            title="View offer"
                            aria-label="View ${offer.name}"
                        >

                            <i class="fa-regular fa-eye"></i>

                        </button>


                        <button
                            class="offer-edit-btn"
                            type="button"
                            data-edit="${offer.id}"
                            title="Edit offer"
                            aria-label="Edit ${offer.name}"
                        >

                            <i class="fa-solid fa-pen"></i>

                        </button>


                    </div>

                </td>

            `;


            offersBody.appendChild(row);

        });


        resultLabel.textContent =
            `${filteredOffers.length} offer${filteredOffers.length === 1 ? "" : "s"} found`;


        footerResult.textContent =
            `Showing ${start + 1}–${Math.min(end, filteredOffers.length)} of ${filteredOffers.length} offers`;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredOffers.length /
                    pageSize
                )
            );


        currentPage.textContent = page;


        prevPage.disabled =
            page <= 1;

        nextPage.disabled =
            page >= totalPages;


        updateSelectionCount();

        bindCheckboxes();

    }


    /* =====================================================
       FILTER
    ===================================================== */

    function applyFilters(){

        const search =
            offerSearch.value
                .trim()
                .toLowerCase();

        const status =
            offerStatus.value;

        const type =
            offerType.value;

        const category =
            offerCategory.value;


        filteredOffers =
            offers.filter(offer => {

                const matchesSearch =
                    !search ||
                    offer.name
                        .toLowerCase()
                        .includes(search) ||
                    offer.campaign
                        .toLowerCase()
                        .includes(search);


                const matchesStatus =
                    status === "all" ||
                    offer.status === status;


                const matchesType =
                    type === "all" ||
                    offer.type === type;


                const matchesCategory =
                    category === "all" ||
                    offer.category === category;


                return (
                    matchesSearch &&
                    matchesStatus &&
                    matchesType &&
                    matchesCategory
                );

            });


        filteredOffers.sort(
            (a,b) =>
                b.id - a.id
        );


        page = 1;

        renderOffers();

    }


    /* =====================================================
       SEARCH SYNC
    ===================================================== */

    offerSearch.addEventListener(
        "input",
        () => {

            offerSearchTop.value =
                offerSearch.value;

            applyFilters();

        }
    );


    offerSearchTop.addEventListener(
        "input",
        () => {

            offerSearch.value =
                offerSearchTop.value;

            applyFilters();

        }
    );


    offerStatus.addEventListener(
        "change",
        applyFilters
    );


    offerType.addEventListener(
        "change",
        applyFilters
    );


    offerCategory.addEventListener(
        "change",
        applyFilters
    );


    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    clearOfferFilters.addEventListener(
        "click",
        () => {

            offerSearch.value = "";

            offerSearchTop.value = "";

            offerStatus.value = "all";

            offerType.value = "all";

            offerCategory.value = "all";

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

                renderOffers();

            }

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.ceil(
                    filteredOffers.length /
                    pageSize
                );


            if(page < totalPages){

                page++;

                renderOffers();

            }

        }
    );


    /* =====================================================
       CHECKBOXES
    ===================================================== */

    function getSelectedIds(){

        return [
            ...document.querySelectorAll(
                ".offer-check:checked"
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
                ".offer-check"
            );

        const checked =
            document.querySelectorAll(
                ".offer-check:checked"
            );


        selectAll.checked =
            allChecks.length > 0 &&
            allChecks.length === checked.length;

    }


    function bindCheckboxes(){

        document
            .querySelectorAll(".offer-check")
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
                .querySelectorAll(".offer-check")
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
       BULK ACTIVATE
    ===================================================== */

    activateSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();


            if(!ids.length){

                showToast(
                    "Select at least one offer"
                );

                return;

            }


            offers.forEach(offer => {

                if(ids.includes(offer.id)){

                    offer.status =
                        "Active";

                }

            });


            applyFilters();


            showToast(
                `${ids.length} offer${ids.length > 1 ? "s" : ""} activated`
            );

        }
    );


    /* =====================================================
       BULK PAUSE
    ===================================================== */

    pauseSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();


            if(!ids.length){

                showToast(
                    "Select at least one offer"
                );

                return;

            }


            offers.forEach(offer => {

                if(ids.includes(offer.id)){

                    offer.status =
                        "Paused";

                }

            });


            applyFilters();


            showToast(
                `${ids.length} offer${ids.length > 1 ? "s" : ""} paused`
            );

        }
    );


    /* =====================================================
       BULK DELETE
    ===================================================== */

    deleteSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();


            if(!ids.length){

                showToast(
                    "Select at least one offer"
                );

                return;

            }


            const confirmed =
                window.confirm(
                    `Delete ${ids.length} selected offer${ids.length > 1 ? "s" : ""}?`
                );


            if(!confirmed){
                return;
            }


            offers =
                offers.filter(
                    offer =>
                        !ids.includes(
                            offer.id
                        )
                );


            applyFilters();


            showToast(
                "Selected offers deleted"
            );

        }
    );


    /* =====================================================
       EXPORT
    ===================================================== */

    exportOffersBtn.addEventListener(
        "click",
        () => {

            if(!filteredOffers.length){

                showToast(
                    "No offers to export"
                );

                return;

            }


            const headers = [

                "Offer",
                "Campaign",
                "Type",
                "Category",
                "Value",
                "Orders",
                "Usage Limit",
                "Minimum Order",
                "Expiry",
                "Status"

            ];


            const rows =
                filteredOffers.map(
                    offer => [

                        offer.name,
                        offer.campaign,
                        offer.type,
                        offer.category,
                        offer.value,
                        offer.orders,
                        offer.limit,
                        offer.minOrder,
                        offer.expiry,
                        offer.status

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
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");


            link.href =
                url;


            link.download =
                "ozzo-offers.csv";


            document.body.appendChild(link);


            link.click();


            link.remove();


            URL.revokeObjectURL(url);


            showToast(
                "Offer report exported"
            );

        }
    );


    /* =====================================================
       ADD OFFER
    ===================================================== */

    addOfferBtn.addEventListener(
        "click",
        () => {

            offerForm.reset();

            editOfferId.value = "";

            offerModalTitle.textContent =
                "Create Offer";

            offerTypeInput.value =
                "Percentage";

            offerCategoryInput.value =
                "All Products";

            offerStatusInput.value =
                "Active";


            offerModal.show();

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ===================================================== */

    offersBody.addEventListener(
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

                openEditOffer(id);

            }


            if(viewButton){

                const id =
                    Number(
                        viewButton.dataset.view
                    );

                viewOffer(id);

            }

        }
    );


    /* =====================================================
       EDIT OFFER
    ===================================================== */

    function openEditOffer(id){

        const offer =
            offers.find(
                item =>
                    item.id === id
            );


        if(!offer){
            return;
        }


        editOfferId.value =
            offer.id;


        offerName.value =
            offer.name;


        offerCampaign.value =
            offer.campaign;


        offerTypeInput.value =
            offer.type;


        offerCategoryInput.value =
            offer.category;


        offerValue.value =
            numericValue(
                offer.value
            );


        offerMinOrder.value =
            offer.minOrder;


        offerMaxUsage.value =
            offer.limit;


        offerExpiry.value =
            offer.expiry;


        offerStatusInput.value =
            offer.status === "Expired"
                ? "Paused"
                : offer.status;


        offerModalTitle.textContent =
            "Edit Offer";


        offerModal.show();

    }


    /* =====================================================
       VIEW OFFER
    ===================================================== */

    function viewOffer(id){

        const offer =
            offers.find(
                item =>
                    item.id === id
            );


        if(!offer){
            return;
        }


        showToast(
            `${offer.name} • ${offer.orders} orders`
        );

    }


    /* =====================================================
       SAVE OFFER
    ===================================================== */

    offerForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                Number(
                    editOfferId.value
                );


            const name =
                offerName.value.trim();


            const campaign =
                offerCampaign.value.trim();


            const type =
                offerTypeInput.value;


            const category =
                offerCategoryInput.value;


            const rawValue =
                Number(
                    offerValue.value
                );


            const minOrder =
                Number(
                    offerMinOrder.value
                );


            const limit =
                Number(
                    offerMaxUsage.value
                );


            const expiry =
                offerExpiry.value;


            const status =
                offerStatusInput.value;


            if(!name || !campaign){

                showToast(
                    "Please complete the required fields"
                );

                return;

            }


            if(
                type !== "Buy One Get One" &&
                type !== "Free Shipping" &&
                rawValue <= 0
            ){

                showToast(
                    "Enter a valid offer value"
                );

                return;

            }


            if(limit <= 0){

                showToast(
                    "Enter a valid usage limit"
                );

                return;

            }


            let displayValue = "";


            if(type === "Percentage"){

                displayValue =
                    `${rawValue}%`;

            }

            else if(type === "Flat"){

                displayValue =
                    `₹${rawValue.toLocaleString("en-IN")}`;

            }

            else if(type === "Buy One Get One"){

                displayValue =
                    "BOGO";

            }

            else{

                displayValue =
                    "Free";

            }


            if(id){

                const offer =
                    offers.find(
                        item =>
                            item.id === id
                    );


                if(offer){

                    offer.name =
                        name;

                    offer.campaign =
                        campaign;

                    offer.type =
                        type;

                    offer.category =
                        category;

                    offer.value =
                        displayValue;

                    offer.minOrder =
                        minOrder;

                    offer.limit =
                        limit;

                    offer.expiry =
                        expiry;

                    offer.status =
                        status;

                }


                showToast(
                    `${name} updated successfully`
                );

            }

            else{

                offers.unshift({

                    id:
                        Date.now(),

                    name,

                    campaign,

                    type,

                    category,

                    value:
                        displayValue,

                    orders:0,

                    limit,

                    minOrder,

                    expiry,

                    status

                });


                showToast(
                    `${name} created successfully`
                );

            }


            offerModal.hide();

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
        .querySelectorAll(".admin-nav-link")
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
        .getElementById("logoutBtn")
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
       INITIAL RENDER
    ===================================================== */

    applyFilters();

});