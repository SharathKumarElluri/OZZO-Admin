/* =========================================================
   OZZO NEWSLETTER
   STANDALONE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       DATA
    ===================================================== */

    let newsletters = [

        {
            id:1,
            name:"Fashion Edit",
            subject:"Fresh styles for your wardrobe",
            audience:"Fashion",
            sent:6640,
            opens:2840,
            clicks:1090,
            scheduled:"18 Sep 2026, 10:00 AM",
            status:"Sent",
            preview:"Explore the latest fashion arrivals at OZZO.",
            content:"Discover our newest fashion collection and special seasonal picks."
        },


        {
            id:2,
            name:"Book Lovers Weekly",
            subject:"Books worth adding to your shelf",
            audience:"Books",
            sent:6240,
            opens:2460,
            clicks:980,
            scheduled:"17 Sep 2026, 09:00 AM",
            status:"Sent",
            preview:"Find your next great read.",
            content:"Explore bestselling titles, timeless classics and new arrivals."
        },


        {
            id:3,
            name:"Back To School",
            subject:"Get ready with OZZO stationery",
            audience:"Stationery",
            sent:5760,
            opens:2180,
            clicks:860,
            scheduled:"16 Sep 2026, 08:30 AM",
            status:"Sent",
            preview:"Everything you need for a fresh start.",
            content:"Shop notebooks, pens and school essentials at OZZO."
        },


        {
            id:4,
            name:"Care Essentials",
            subject:"Everyday comfort, delivered",
            audience:"Pads & Personal Care",
            sent:4820,
            opens:1920,
            clicks:740,
            scheduled:"15 Sep 2026, 11:00 AM",
            status:"Sent",
            preview:"Explore everyday personal care essentials.",
            content:"Discover comfortable everyday care products from OZZO."
        },


        {
            id:5,
            name:"Weekend Picks",
            subject:"Your weekend shopping list is here",
            audience:"All Subscribers",
            sent:8420,
            opens:3510,
            clicks:1420,
            scheduled:"20 Sep 2026, 10:00 AM",
            status:"Scheduled",
            preview:"Fresh picks across every OZZO category.",
            content:"Explore this week's top picks across fashion, books and more."
        },


        {
            id:6,
            name:"New Customer Welcome",
            subject:"Welcome to OZZO",
            audience:"New Customers",
            sent:2180,
            opens:920,
            clicks:350,
            scheduled:"21 Sep 2026, 09:30 AM",
            status:"Scheduled",
            preview:"Here's a little something to get you started.",
            content:"Welcome to OZZO and discover our most-loved products."
        },


        {
            id:7,
            name:"September Sale",
            subject:"September savings are waiting",
            audience:"All Subscribers",
            sent:0,
            opens:0,
            clicks:0,
            scheduled:"25 Sep 2026, 10:00 AM",
            status:"Draft",
            preview:"Special savings across OZZO.",
            content:"Add your September promotional content here."
        },


        {
            id:8,
            name:"Stationery Update",
            subject:"New stationery arrivals",
            audience:"Stationery",
            sent:2980,
            opens:1020,
            clicks:310,
            scheduled:"12 Sep 2026, 09:00 AM",
            status:"Paused",
            preview:"Meet the newest stationery additions.",
            content:"Take a look at the newest stationery products."
        }

    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const newslettersBody =
        document.getElementById(
            "newslettersBody"
        );


    const newsletterSearch =
        document.getElementById(
            "newsletterSearch"
        );


    const newsletterSearchTop =
        document.getElementById(
            "newsletterSearchTop"
        );


    const newsletterStatus =
        document.getElementById(
            "newsletterStatus"
        );


    const newsletterAudience =
        document.getElementById(
            "newsletterAudience"
        );


    const newsletterSort =
        document.getElementById(
            "newsletterSort"
        );


    const clearNewsletterFilters =
        document.getElementById(
            "clearNewsletterFilters"
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


    const addNewsletterBtn =
        document.getElementById(
            "addNewsletterBtn"
        );


    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    const newsletterModalElement =
        document.getElementById(
            "newsletterModal"
        );


    const newsletterModal =
        new bootstrap.Modal(
            newsletterModalElement
        );


    const previewModalElement =
        document.getElementById(
            "previewModal"
        );


    const previewModal =
        new bootstrap.Modal(
            previewModalElement
        );


    const newsletterModalTitle =
        document.getElementById(
            "newsletterModalTitle"
        );


    const editNewsletterId =
        document.getElementById(
            "editNewsletterId"
        );


    const newsletterName =
        document.getElementById(
            "newsletterName"
        );


    const newsletterSubject =
        document.getElementById(
            "newsletterSubject"
        );


    const newsletterAudienceInput =
        document.getElementById(
            "newsletterAudienceInput"
        );


    const newsletterStatusInput =
        document.getElementById(
            "newsletterStatusInput"
        );


    const newsletterDate =
        document.getElementById(
            "newsletterDate"
        );


    const newsletterTime =
        document.getElementById(
            "newsletterTime"
        );


    const newsletterPreview =
        document.getElementById(
            "newsletterPreview"
        );


    const newsletterContent =
        document.getElementById(
            "newsletterContent"
        );


    const adminToast =
        document.getElementById(
            "adminToast"
        );


    /* =====================================================
       STATE
    ===================================================== */

    let filteredNewsletters =
        [...newsletters];


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
            window.ozzoNewsletterToast
        );

        window.ozzoNewsletterToast =
            setTimeout(() => {

                adminToast.classList.remove(
                    "show"
                );

            },2200);

    }


    /* =====================================================
       FORMATTERS
    ===================================================== */

    function formatNumber(number){

        return Number(number || 0)
            .toLocaleString(
                "en-IN"
            );

    }


    function formatDateText(date){

        if(!date){
            return "-";
        }

        const parsed =
            new Date(
                `${date}T00:00:00`
            );

        return parsed.toLocaleDateString(
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


    function calculateOpenRate(item){

        if(!item.sent){
            return 0;
        }

        return (
            item.opens /
            item.sent
        ) * 100;

    }


    function calculateClickRate(item){

        if(!item.sent){
            return 0;
        }

        return (
            item.clicks /
            item.sent
        ) * 100;

    }


    /* =====================================================
       RENDER
    ===================================================== */

    function renderNewsletters(){

        const start =
            (page - 1) *
            pageSize;


        const end =
            start +
            pageSize;


        const pageItems =
            filteredNewsletters.slice(
                start,
                end
            );


        newslettersBody.innerHTML =
            "";


        if(!filteredNewsletters.length){

            document
                .getElementById(
                    "emptyState"
                )
                .classList.remove(
                    "d-none"
                );


            resultLabel.textContent =
                "0 campaigns found";


            footerResult.textContent =
                "Showing 0 of 0 campaigns";


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
            newsletter => {

                const row =
                    document.createElement(
                        "tr"
                    );


                row.dataset.id =
                    newsletter.id;


                const openRate =
                    calculateOpenRate(
                        newsletter
                    );


                const clickRate =
                    calculateClickRate(
                        newsletter
                    );


                row.innerHTML = `

                    <td>

                        <input
                            type="checkbox"
                            class="newsletter-check"
                            value="${newsletter.id}"
                            aria-label="Select ${newsletter.name}"
                        >

                    </td>


                    <td>

                        <span class="newsletter-main">
                            ${newsletter.name}
                        </span>

                        <span class="newsletter-sub">
                            ${newsletter.subject}
                        </span>

                    </td>


                    <td>

                        <span class="newsletter-audience">
                            ${newsletter.audience}
                        </span>

                    </td>


                    <td>

                        <strong class="newsletter-metric">
                            ${formatNumber(newsletter.sent)}
                        </strong>

                        <span class="newsletter-metric-sub">
                            recipients
                        </span>

                    </td>


                    <td>

                        <strong class="newsletter-metric">
                            ${openRate ? openRate.toFixed(1) + "%" : "—"}
                        </strong>

                        <span class="newsletter-metric-sub">
                            ${formatNumber(newsletter.opens)} opens
                        </span>

                    </td>


                    <td>

                        <strong class="newsletter-metric">
                            ${clickRate ? clickRate.toFixed(1) + "%" : "—"}
                        </strong>

                        <span class="newsletter-metric-sub">
                            ${formatNumber(newsletter.clicks)} clicks
                        </span>

                    </td>


                    <td>
                        ${newsletter.scheduled}
                    </td>


                    <td>

                        <span
                            class="newsletter-status ${statusClass(newsletter.status)}"
                        >
                            ${newsletter.status}
                        </span>

                    </td>


                    <td>

                        <div class="newsletter-action-wrap">

                            <button
                                class="newsletter-view-btn"
                                type="button"
                                data-view="${newsletter.id}"
                                title="Preview campaign"
                                aria-label="Preview ${newsletter.name}"
                            >

                                <i class="fa-regular fa-eye"></i>

                            </button>


                            <button
                                class="newsletter-edit-btn"
                                type="button"
                                data-edit="${newsletter.id}"
                                title="Edit campaign"
                                aria-label="Edit ${newsletter.name}"
                            >

                                <i class="fa-solid fa-pen"></i>

                            </button>

                        </div>

                    </td>

                `;


                newslettersBody.appendChild(
                    row
                );

            }
        );


        resultLabel.textContent =
            `${filteredNewsletters.length} campaign${filteredNewsletters.length === 1 ? "" : "s"} found`;


        footerResult.textContent =
            `Showing ${start + 1}–${Math.min(
                end,
                filteredNewsletters.length
            )} of ${filteredNewsletters.length} campaigns`;


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filteredNewsletters.length /
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
            newsletterSearch.value
                .trim()
                .toLowerCase();


        const status =
            newsletterStatus.value;


        const audience =
            newsletterAudience.value;


        const sort =
            newsletterSort.value;


        filteredNewsletters =
            newsletters.filter(
                newsletter => {

                    const matchesSearch =
                        !search ||
                        newsletter.name
                            .toLowerCase()
                            .includes(
                                search
                            ) ||
                        newsletter.subject
                            .toLowerCase()
                            .includes(
                                search
                            );


                    const matchesStatus =
                        status === "all" ||
                        newsletter.status ===
                            status;


                    const matchesAudience =
                        audience === "all" ||
                        newsletter.audience ===
                            audience;


                    return (
                        matchesSearch &&
                        matchesStatus &&
                        matchesAudience
                    );

                }
            );


        if(sort === "opens"){

            filteredNewsletters.sort(
                (a,b) =>
                    b.opens -
                    a.opens
            );

        }

        else if(sort === "clicks"){

            filteredNewsletters.sort(
                (a,b) =>
                    b.clicks -
                    a.clicks
            );

        }

        else if(sort === "name"){

            filteredNewsletters.sort(
                (a,b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }

        else{

            filteredNewsletters.sort(
                (a,b) =>
                    b.id -
                    a.id
            );

        }


        page = 1;

        renderNewsletters();

    }


    /* =====================================================
       SEARCH
    ===================================================== */

    newsletterSearch.addEventListener(
        "input",
        () => {

            newsletterSearchTop.value =
                newsletterSearch.value;

            applyFilters();

        }
    );


    newsletterSearchTop.addEventListener(
        "input",
        () => {

            newsletterSearch.value =
                newsletterSearchTop.value;

            applyFilters();

        }
    );


    newsletterStatus.addEventListener(
        "change",
        applyFilters
    );


    newsletterAudience.addEventListener(
        "change",
        applyFilters
    );


    newsletterSort.addEventListener(
        "change",
        applyFilters
    );


    /* =====================================================
       CLEAR
    ===================================================== */

    clearNewsletterFilters.addEventListener(
        "click",
        () => {

            newsletterSearch.value =
                "";

            newsletterSearchTop.value =
                "";

            newsletterStatus.value =
                "all";

            newsletterAudience.value =
                "all";

            newsletterSort.value =
                "latest";

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

                renderNewsletters();

            }

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.ceil(
                    filteredNewsletters.length /
                    pageSize
                );


            if(page < totalPages){

                page++;

                renderNewsletters();

            }

        }
    );


    /* =====================================================
       CHECKBOXES
    ===================================================== */

    function getSelectedIds(){

        return [
            ...document.querySelectorAll(
                ".newsletter-check:checked"
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
                ".newsletter-check"
            );


        const checked =
            document.querySelectorAll(
                ".newsletter-check:checked"
            );


        selectAll.checked =
            allChecks.length > 0 &&
            allChecks.length ===
            checked.length;

    }


    function bindCheckboxes(){

        document
            .querySelectorAll(
                ".newsletter-check"
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
                    ".newsletter-check"
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
       SEND
    ===================================================== */

    document
        .getElementById(
            "sendSelected"
        )
        .addEventListener(
            "click",
            () => {

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one campaign"
                    );

                    return;

                }


                newsletters.forEach(
                    newsletter => {

                        if(
                            ids.includes(
                                newsletter.id
                            )
                        ){

                            newsletter.status =
                                "Sent";

                            if(
                                newsletter.sent === 0
                            ){

                                newsletter.sent =
                                    1000;

                                newsletter.opens =
                                    0;

                                newsletter.clicks =
                                    0;

                            }

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} campaign${ids.length > 1 ? "s" : ""} sent`
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
                        "Select at least one campaign"
                    );

                    return;

                }


                newsletters.forEach(
                    newsletter => {

                        if(
                            ids.includes(
                                newsletter.id
                            )
                        ){

                            newsletter.status =
                                "Paused";

                        }

                    }
                );


                applyFilters();


                showToast(
                    `${ids.length} campaign${ids.length > 1 ? "s" : ""} paused`
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
                        "Select at least one campaign"
                    );

                    return;

                }


                const confirmed =
                    window.confirm(
                        `Delete ${ids.length} selected campaign${ids.length > 1 ? "s" : ""}?`
                    );


                if(!confirmed){
                    return;
                }


                newsletters =
                    newsletters.filter(
                        newsletter =>
                            !ids.includes(
                                newsletter.id
                            )
                    );


                applyFilters();


                showToast(
                    "Selected campaigns deleted"
                );

            }
        );


    /* =====================================================
       EXPORT
    ===================================================== */

    document
        .getElementById(
            "exportNewslettersBtn"
        )
        .addEventListener(
            "click",
            () => {

                if(
                    !filteredNewsletters.length
                ){

                    showToast(
                        "No campaigns to export"
                    );

                    return;

                }


                const headers = [

                    "Campaign",
                    "Subject",
                    "Audience",
                    "Sent",
                    "Opens",
                    "Clicks",
                    "Scheduled",
                    "Status"

                ];


                const rows =
                    filteredNewsletters.map(
                        newsletter => [

                            newsletter.name,
                            newsletter.subject,
                            newsletter.audience,
                            newsletter.sent,
                            newsletter.opens,
                            newsletter.clicks,
                            newsletter.scheduled,
                            newsletter.status

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
                    "ozzo-newsletter-campaigns.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    "Newsletter report exported"
                );

            }
        );


    /* =====================================================
       CREATE
    ===================================================== */

    addNewsletterBtn.addEventListener(
        "click",
        () => {

            newsletterForm.reset();

            editNewsletterId.value =
                "";

            newsletterModalTitle.textContent =
                "Create Campaign";


            newsletterAudienceInput.value =
                "All Subscribers";


            newsletterStatusInput.value =
                "Draft";


            newsletterModal.show();

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ===================================================== */

    newslettersBody.addEventListener(
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

                openEditNewsletter(id);

            }


            if(viewButton){

                const id =
                    Number(
                        viewButton.dataset.view
                    );

                previewNewsletter(id);

            }

        }
    );


    /* =====================================================
       EDIT
    ===================================================== */

    function openEditNewsletter(id){

        const newsletter =
            newsletters.find(
                item =>
                    item.id === id
            );


        if(!newsletter){
            return;
        }


        editNewsletterId.value =
            newsletter.id;


        newsletterName.value =
            newsletter.name;


        newsletterSubject.value =
            newsletter.subject;


        newsletterAudienceInput.value =
            newsletter.audience;


        newsletterStatusInput.value =
            newsletter.status === "Sent"
                ? "Scheduled"
                : newsletter.status;


        const scheduleDate =
            newsletter.scheduled
                .split(",")[0];


        const scheduleTime =
            newsletter.scheduled
                .split(",")[1]
                ?.trim() || "";


        if(
            scheduleDate
        ){

            const parsed =
                new Date(
                    scheduleDate
                );


            if(
                !Number.isNaN(
                    parsed.getTime()
                )
            ){

                newsletterDate.value =
                    parsed
                        .toISOString()
                        .split("T")[0];

            }

        }


        if(scheduleTime){

            const timeMatch =
                scheduleTime.match(
                    /(\d{1,2}):(\d{2})\s*(AM|PM)/i
                );


            if(timeMatch){

                let hours =
                    Number(
                        timeMatch[1]
                    );


                const minutes =
                    timeMatch[2];


                const meridiem =
                    timeMatch[3]
                        .toUpperCase();


                if(
                    meridiem === "PM" &&
                    hours !== 12
                ){

                    hours += 12;

                }


                if(
                    meridiem === "AM" &&
                    hours === 12
                ){

                    hours = 0;

                }


                newsletterTime.value =
                    `${String(hours)
                        .padStart(2,"0")}:${minutes}`;

            }

        }


        newsletterPreview.value =
            newsletter.preview || "";


        newsletterContent.value =
            newsletter.content || "";


        newsletterModalTitle.textContent =
            "Edit Campaign";


        newsletterModal.show();

    }


    /* =====================================================
       PREVIEW
    ===================================================== */

    function previewNewsletter(id){

        const newsletter =
            newsletters.find(
                item =>
                    item.id === id
            );


        if(!newsletter){
            return;
        }


        const openRate =
            calculateOpenRate(
                newsletter
            );


        const clickRate =
            calculateClickRate(
                newsletter
            );


        document.getElementById(
            "previewTitle"
        ).textContent =
            newsletter.name;


        document.getElementById(
            "previewAudience"
        ).textContent =
            newsletter.audience
                .toUpperCase();


        document.getElementById(
            "previewSubject"
        ).textContent =
            newsletter.subject;


        document.getElementById(
            "previewText"
        ).textContent =
            newsletter.preview ||
            newsletter.content ||
            "Discover what's new at OZZO.";


        document.getElementById(
            "previewAudienceDetail"
        ).textContent =
            newsletter.audience;


        document.getElementById(
            "previewSent"
        ).textContent =
            formatNumber(
                newsletter.sent
            );


        document.getElementById(
            "previewOpenRate"
        ).textContent =
            openRate
                ? `${openRate.toFixed(1)}%`
                : "—";


        document.getElementById(
            "previewClickRate"
        ).textContent =
            clickRate
                ? `${clickRate.toFixed(1)}%`
                : "—";


        previewModal.show();

    }


    /* =====================================================
       SAVE
    ===================================================== */

    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                Number(
                    editNewsletterId.value
                );


            const name =
                newsletterName.value.trim();


            const subject =
                newsletterSubject.value.trim();


            const audience =
                newsletterAudienceInput.value;


            const status =
                newsletterStatusInput.value;


            const date =
                newsletterDate.value;


            const time =
                newsletterTime.value;


            const preview =
                newsletterPreview.value.trim();


            const content =
                newsletterContent.value.trim();


            if(
                !name ||
                !subject ||
                !date
            ){

                showToast(
                    "Please complete the required fields"
                );

                return;

            }


            const formattedDate =
                formatDateText(
                    date
                );


            let formattedTime =
                "10:00 AM";


            if(time){

                const [
                    hourText,
                    minuteText
                ] =
                    time.split(":");


                let hours =
                    Number(
                        hourText
                    );


                const minutes =
                    minuteText;


                const meridiem =
                    hours >= 12
                        ? "PM"
                        : "AM";


                if(hours === 0){
                    hours = 12;
                }

                else if(hours > 12){
                    hours -= 12;
                }


                formattedTime =
                    `${hours}:${minutes} ${meridiem}`;

            }


            const scheduled =
                `${formattedDate}, ${formattedTime}`;


            if(id){

                const newsletter =
                    newsletters.find(
                        item =>
                            item.id === id
                    );


                if(newsletter){

                    newsletter.name =
                        name;

                    newsletter.subject =
                        subject;

                    newsletter.audience =
                        audience;

                    newsletter.scheduled =
                        scheduled;

                    newsletter.status =
                        status;

                    newsletter.preview =
                        preview;

                    newsletter.content =
                        content;

                }


                showToast(
                    `${name} updated successfully`
                );

            }

            else{

                newsletters.unshift({

                    id:
                        Date.now(),

                    name,

                    subject,

                    audience,

                    sent:0,

                    opens:0,

                    clicks:0,

                    scheduled,

                    status,

                    preview,

                    content

                });


                showToast(
                    `${name} created successfully`
                );

            }


            newsletterModal.hide();

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
       INITIAL RENDER
    ===================================================== */

    applyFilters();

});