/* =========================================================
   OZZO PARTNERS
   STANDALONE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       DATA
    ===================================================== */

    let partners = [

        {
            id:1,
            name:"Metro Retail Hub",
            company:"Metro Retail Pvt Ltd",
            email:"metro@example.com",
            phone:"9876543210",
            type:"Retail Partner",
            location:"Hyderabad",
            orders:428,
            revenue:528420,
            joined:"2026-01-18",
            status:"Active",
            address:"Banjara Hills, Hyderabad"
        },


        {
            id:2,
            name:"Urban Corporate Hub",
            company:"Urban Business Solutions",
            email:"urban@example.com",
            phone:"9876501234",
            type:"Corporate Partner",
            location:"Bengaluru",
            orders:362,
            revenue:462180,
            joined:"2026-02-06",
            status:"Active",
            address:"Indiranagar, Bengaluru"
        },


        {
            id:3,
            name:"Swift Logistics",
            company:"Swift Logistics India",
            email:"swift@example.com",
            phone:"9867012456",
            type:"Logistics Partner",
            location:"Mumbai",
            orders:298,
            revenue:396740,
            joined:"2026-02-19",
            status:"Active",
            address:"Andheri East, Mumbai"
        },


        {
            id:4,
            name:"South Marketplace",
            company:"South Marketplace Network",
            email:"south@example.com",
            phone:"9842012345",
            type:"Marketplace Partner",
            location:"Chennai",
            orders:246,
            revenue:324680,
            joined:"2026-03-11",
            status:"Active",
            address:"Anna Nagar, Chennai"
        },


        {
            id:5,
            name:"City Essentials",
            company:"City Essentials Retail",
            email:"city@example.com",
            phone:"9959123456",
            type:"Retail Partner",
            location:"Hyderabad",
            orders:184,
            revenue:248520,
            joined:"2026-04-08",
            status:"Pending",
            address:"Kukatpally, Hyderabad"
        },


        {
            id:6,
            name:"Prime Business Network",
            company:"Prime Business Network",
            email:"prime@example.com",
            phone:"9987654321",
            type:"Corporate Partner",
            location:"Bengaluru",
            orders:152,
            revenue:214860,
            joined:"2026-05-20",
            status:"Pending",
            address:"Whitefield, Bengaluru"
        },


        {
            id:7,
            name:"Express Route",
            company:"Express Route Services",
            email:"express@example.com",
            phone:"9876001122",
            type:"Logistics Partner",
            location:"Mumbai",
            orders:96,
            revenue:142640,
            joined:"2026-06-14",
            status:"Suspended",
            address:"Powai, Mumbai"
        },


        {
            id:8,
            name:"South India Marketplace",
            company:"SIM Commerce Pvt Ltd",
            email:"sim@example.com",
            phone:"9791002233",
            type:"Marketplace Partner",
            location:"Chennai",
            orders:74,
            revenue:118420,
            joined:"2026-07-02",
            status:"Inactive",
            address:"T Nagar, Chennai"
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const partnersBody =
        document.getElementById(
            "partnersBody"
        );


    const partnerSearch =
        document.getElementById(
            "partnerSearch"
        );


    const partnerSearchTop =
        document.getElementById(
            "partnerSearchTop"
        );


    const partnerStatus =
        document.getElementById(
            "partnerStatus"
        );


    const partnerType =
        document.getElementById(
            "partnerType"
        );


    const partnerLocation =
        document.getElementById(
            "partnerLocation"
        );


    const clearPartnerFilters =
        document.getElementById(
            "clearPartnerFilters"
        );


    const resultLabel =
        document.getElementById(
            "resultLabel"
        );


    const footerResult =
        document.getElementById(
            "footerResult"
        );


    const selectedCount =
        document.getElementById(
            "selectedCount"
        );


    const selectAll =
        document.getElementById(
            "selectAll"
        );


    const prevPage =
        document.getElementById(
            "prevPage"
        );


    const nextPage =
        document.getElementById(
            "nextPage"
        );


    const currentPage =
        document.getElementById(
            "currentPage"
        );


    const addPartnerBtn =
        document.getElementById(
            "addPartnerBtn"
        );


    const partnerForm =
        document.getElementById(
            "partnerForm"
        );


    const partnerModalElement =
        document.getElementById(
            "partnerModal"
        );


    const partnerModal =
        new bootstrap.Modal(
            partnerModalElement
        );


    const partnerModalTitle =
        document.getElementById(
            "partnerModalTitle"
        );


    const editPartnerId =
        document.getElementById(
            "editPartnerId"
        );


    const partnerName =
        document.getElementById(
            "partnerName"
        );


    const partnerCompany =
        document.getElementById(
            "partnerCompany"
        );


    const partnerEmail =
        document.getElementById(
            "partnerEmail"
        );


    const partnerPhone =
        document.getElementById(
            "partnerPhone"
        );


    const partnerTypeInput =
        document.getElementById(
            "partnerTypeInput"
        );


    const partnerCity =
        document.getElementById(
            "partnerCity"
        );


    const partnerStatusInput =
        document.getElementById(
            "partnerStatusInput"
        );


    const partnerOrders =
        document.getElementById(
            "partnerOrders"
        );


    const partnerRevenue =
        document.getElementById(
            "partnerRevenue"
        );


    const partnerAddress =
        document.getElementById(
            "partnerAddress"
        );


    const adminToast =
        document.getElementById(
            "adminToast"
        );


    /* =====================================================
       STATE
    ===================================================== */

    let filteredPartners =
        [...partners];


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
            window.ozzoPartnerToast
        );

        window.ozzoPartnerToast =
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
            .toLocaleString(
                "en-IN"
            );

    }


    function formatCurrency(number){

        return `₹${formatNumber(number)}`;

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
            .replace(
                /\s+/g,
                "-"
            );

    }


    function getInitials(name){

        const words =
            name
                .trim()
                .split(/\s+/)
                .filter(Boolean);


        if(!words.length){
            return "P";
        }


        return words
            .slice(0,2)
            .map(
                word =>
                    word.charAt(0)
                        .toUpperCase()
            )
            .join("");

    }


    /* =====================================================
       RENDER TABLE
    ===================================================== */

    function renderPartners(){

        const start =
            (page - 1) *
            pageSize;


        const end =
            start +
            pageSize;


        const pageItems =
            filteredPartners.slice(
                start,
                end
            );


        partnersBody.innerHTML =
            "";


        if(!filteredPartners.length){

            document
                .getElementById(
                    "emptyState"
                )
                .classList.remove(
                    "d-none"
                );


            resultLabel.textContent =
                "0 partners found";


            footerResult.textContent =
                "Showing 0 of 0 partners";


            currentPage.textContent =
                "1";


            prevPage.disabled =
                true;


            nextPage.disabled =
                true;


            updateSelectionCount();

            return;

        }


        document
            .getElementById(
                "emptyState"
            )
            .classList.add(
                "d-none"
            );


        pageItems.forEach(
            partner => {

                const row =
                    document.createElement(
                        "tr"
                    );


                row.dataset.id =
                    partner.id;


                row.innerHTML = `

                    <td>

                        <input
                            type="checkbox"
                            class="partner-check"
                            value="${partner.id}"
                            aria-label="Select ${partner.name}"
                        >

                    </td>


                    <td>

                        <div class="partner-cell">

                            <div class="partner-avatar">
                                ${getInitials(partner.name)}
                            </div>

                            <div class="partner-cell-info">

                                <span class="partner-main">
                                    ${partner.name}
                                </span>

                                <span class="partner-sub">
                                    ${partner.company}
                                </span>

                            </div>

                        </div>

                    </td>


                    <td>

                        <span class="partner-type">
                            ${partner.type}
                        </span>

                    </td>


                    <td>

                        <span class="partner-location">
                            ${partner.location}
                        </span>

                    </td>


                    <td>

                        <strong class="partner-metric">
                            ${formatNumber(partner.orders)}
                        </strong>

                        <span class="partner-metric-sub">
                            orders
                        </span>

                    </td>


                    <td>

                        <strong class="partner-metric">
                            ${formatCurrency(partner.revenue)}
                        </strong>

                        <span class="partner-metric-sub">
                            monthly
                        </span>

                    </td>


                    <td>
                        ${formatDate(partner.joined)}
                    </td>


                    <td>

                        <span
                            class="partner-status ${statusClass(partner.status)}"
                        >
                            ${partner.status}
                        </span>

                    </td>


                    <td>

                        <div class="partner-action-wrap">


                            <button
                                class="partner-view-btn"
                                type="button"
                                data-view="${partner.id}"
                                title="View partner"
                                aria-label="View ${partner.name}"
                            >

                                <i class="fa-regular fa-eye"></i>

                            </button>


                            <button
                                class="partner-edit-btn"
                                type="button"
                                data-edit="${partner.id}"
                                title="Edit partner"
                                aria-label="Edit ${partner.name}"
                            >

                                <i class="fa-solid fa-pen"></i>

                            </button>


                        </div>

                    </td>

                `;


                partnersBody.appendChild(
                    row
                );

            }
        );


        resultLabel.textContent =
            `${filteredPartners.length} partner${filteredPartners.length === 1 ? "" : "s"} found`;


        footerResult.textContent =
            `Showing ${start + 1}–${Math.min(
                end,
                filteredPartners.length
            )} of ${filteredPartners.length} partners`;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredPartners.length /
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
       FILTER
    ===================================================== */

    function applyFilters(){

        const search =
            partnerSearch.value
                .trim()
                .toLowerCase();


        const status =
            partnerStatus.value;


        const type =
            partnerType.value;


        const location =
            partnerLocation.value;


        filteredPartners =
            partners.filter(
                partner => {

                    const matchesSearch =
                        !search ||
                        partner.name
                            .toLowerCase()
                            .includes(
                                search
                            ) ||
                        partner.company
                            .toLowerCase()
                            .includes(
                                search
                            ) ||
                        partner.email
                            .toLowerCase()
                            .includes(
                                search
                            );


                    const matchesStatus =
                        status === "all" ||
                        partner.status ===
                            status;


                    const matchesType =
                        type === "all" ||
                        partner.type ===
                            type;


                    const matchesLocation =
                        location === "all" ||
                        partner.location ===
                            location;


                    return (
                        matchesSearch &&
                        matchesStatus &&
                        matchesType &&
                        matchesLocation
                    );

                }
            );


        filteredPartners.sort(
            (a,b) =>
                b.id - a.id
        );


        page = 1;

        renderPartners();

    }


    /* =====================================================
       SEARCH SYNC
    ===================================================== */

    partnerSearch.addEventListener(
        "input",
        () => {

            partnerSearchTop.value =
                partnerSearch.value;

            applyFilters();

        }
    );


    partnerSearchTop.addEventListener(
        "input",
        () => {

            partnerSearch.value =
                partnerSearchTop.value;

            applyFilters();

        }
    );


    partnerStatus.addEventListener(
        "change",
        applyFilters
    );


    partnerType.addEventListener(
        "change",
        applyFilters
    );


    partnerLocation.addEventListener(
        "change",
        applyFilters
    );


    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    clearPartnerFilters.addEventListener(
        "click",
        () => {

            partnerSearch.value =
                "";

            partnerSearchTop.value =
                "";

            partnerStatus.value =
                "all";

            partnerType.value =
                "all";

            partnerLocation.value =
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

                renderPartners();

            }

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.ceil(
                    filteredPartners.length /
                    pageSize
                );


            if(page < totalPages){

                page++;

                renderPartners();

            }

        }
    );


    /* =====================================================
       CHECKBOXES
    ===================================================== */

    function getSelectedIds(){

        return [
            ...document.querySelectorAll(
                ".partner-check:checked"
            )
        ].map(
            checkbox =>
                Number(
                    checkbox.value
                )
        );

    }


    function updateSelectionCount(){

        const selected =
            getSelectedIds();


        selectedCount.textContent =
            `${selected.length} selected`;


        const allChecks =
            document.querySelectorAll(
                ".partner-check"
            );


        const checked =
            document.querySelectorAll(
                ".partner-check:checked"
            );


        selectAll.checked =
            allChecks.length > 0 &&
            allChecks.length ===
            checked.length;

    }


    function bindCheckboxes(){

        document
            .querySelectorAll(
                ".partner-check"
            )
            .forEach(
                checkbox => {

                    checkbox.addEventListener(
                        "change",
                        updateSelectionCount
                    );

                }
            );

    }


    selectAll.addEventListener(
        "change",
        () => {

            document
                .querySelectorAll(
                    ".partner-check"
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
       APPROVE SELECTED
    ===================================================== */

    document
        .getElementById(
            "approveSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one partner"
                    );

                    return;

                }


                partners.forEach(
                    partner => {

                        if(
                            ids.includes(
                                partner.id
                            )
                        ){

                            partner.status =
                                "Active";

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} partner${ids.length > 1 ? "s" : ""} approved`
                );

            }
        );


    /* =====================================================
       SUSPEND SELECTED
    ===================================================== */

    document
        .getElementById(
            "suspendSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one partner"
                    );

                    return;

                }


                partners.forEach(
                    partner => {

                        if(
                            ids.includes(
                                partner.id
                            )
                        ){

                            partner.status =
                                "Suspended";

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} partner${ids.length > 1 ? "s" : ""} suspended`
                );

            }
        );


    /* =====================================================
       DELETE SELECTED
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
                        "Select at least one partner"
                    );

                    return;

                }


                const confirmed =
                    window.confirm(
                        `Delete ${ids.length} selected partner${ids.length > 1 ? "s" : ""}?`
                    );


                if(!confirmed){
                    return;
                }


                partners =
                    partners.filter(
                        partner =>
                            !ids.includes(
                                partner.id
                            )
                    );


                applyFilters();


                showToast(
                    "Selected partners deleted"
                );

            }
        );


    /* =====================================================
       EXPORT
    ===================================================== */

    document
        .getElementById(
            "exportPartnersBtn"
        )
        .addEventListener(
            "click",
            () => {

                if(!filteredPartners.length){

                    showToast(
                        "No partners to export"
                    );

                    return;

                }


                const headers = [

                    "Partner",
                    "Company",
                    "Email",
                    "Phone",
                    "Type",
                    "Location",
                    "Orders",
                    "Revenue",
                    "Joined",
                    "Status"

                ];


                const rows =
                    filteredPartners.map(
                        partner => [

                            partner.name,
                            partner.company,
                            partner.email,
                            partner.phone,
                            partner.type,
                            partner.location,
                            partner.orders,
                            partner.revenue,
                            partner.joined,
                            partner.status

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
                                        .replace(
                                            /"/g,
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
                    "ozzo-partners.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Partner report exported"
                );

            }
        );


    /* =====================================================
       ADD PARTNER
    ===================================================== */

    addPartnerBtn.addEventListener(
        "click",
        () => {

            partnerForm.reset();

            editPartnerId.value =
                "";

            partnerModalTitle.textContent =
                "Add Partner";


            partnerTypeInput.value =
                "Retail Partner";


            partnerCity.value =
                "Hyderabad";


            partnerStatusInput.value =
                "Active";


            partnerOrders.value =
                "0";


            partnerRevenue.value =
                "0";


            partnerModal.show();

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ===================================================== */

    partnersBody.addEventListener(
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


                openEditPartner(id);

            }


            if(viewButton){

                const id =
                    Number(
                        viewButton.dataset.view
                    );


                viewPartner(id);

            }

        }
    );


    /* =====================================================
       EDIT PARTNER
    ===================================================== */

    function openEditPartner(id){

        const partner =
            partners.find(
                item =>
                    item.id === id
            );


        if(!partner){
            return;
        }


        editPartnerId.value =
            partner.id;


        partnerName.value =
            partner.name;


        partnerCompany.value =
            partner.company;


        partnerEmail.value =
            partner.email;


        partnerPhone.value =
            partner.phone;


        partnerTypeInput.value =
            partner.type;


        partnerCity.value =
            partner.location;


        partnerStatusInput.value =
            partner.status;


        partnerOrders.value =
            partner.orders;


        partnerRevenue.value =
            partner.revenue;


        partnerAddress.value =
            partner.address || "";


        partnerModalTitle.textContent =
            "Edit Partner";


        partnerModal.show();

    }


    /* =====================================================
       VIEW PARTNER
    ===================================================== */

    function viewPartner(id){

        const partner =
            partners.find(
                item =>
                    item.id === id
            );


        if(!partner){
            return;
        }


        showToast(
            `${partner.name} • ${formatCurrency(partner.revenue)}`
        );

    }


    /* =====================================================
       SAVE PARTNER
    ===================================================== */

    partnerForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                Number(
                    editPartnerId.value
                );


            const name =
                partnerName.value.trim();


            const company =
                partnerCompany.value.trim();


            const email =
                partnerEmail.value.trim();


            const phone =
                partnerPhone.value.trim();


            const type =
                partnerTypeInput.value;


            const location =
                partnerCity.value;


            const status =
                partnerStatusInput.value;


            const orders =
                Number(
                    partnerOrders.value
                ) || 0;


            const revenue =
                Number(
                    partnerRevenue.value
                ) || 0;


            const address =
                partnerAddress.value.trim();


            if(
                !name ||
                !company ||
                !email ||
                !phone
            ){

                showToast(
                    "Please complete the required fields"
                );

                return;

            }


            if(id){

                const partner =
                    partners.find(
                        item =>
                            item.id === id
                    );


                if(partner){

                    partner.name =
                        name;

                    partner.company =
                        company;

                    partner.email =
                        email;

                    partner.phone =
                        phone;

                    partner.type =
                        type;

                    partner.location =
                        location;

                    partner.status =
                        status;

                    partner.orders =
                        orders;

                    partner.revenue =
                        revenue;

                    partner.address =
                        address;

                }


                showToast(
                    `${name} updated successfully`
                );

            }

            else{

                partners.unshift({

                    id:
                        Date.now(),

                    name,

                    company,

                    email,

                    phone,

                    type,

                    location,

                    orders,

                    revenue,

                    joined:
                        new Date()
                            .toISOString()
                            .split("T")[0],

                    status,

                    address

                });


                showToast(
                    `${name} added successfully`
                );

            }


            partnerModal.hide();

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
        .forEach(
            link => {

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

            }
        );


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