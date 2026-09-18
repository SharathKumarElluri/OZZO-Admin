/* =========================================================
   OZZO SUPPORT
   SUPPORT TICKET MANAGEMENT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const sidebar =
        document.getElementById("adminSidebar");

    const overlay =
        document.getElementById("sidebarOverlay");

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNotificationBtn =
        document.getElementById("mobileNotificationBtn");

    const notificationBtn =
        document.getElementById("notificationBtn");

    const notificationPanel =
        document.getElementById("notificationPanel");

    const closeNotifications =
        document.getElementById("closeNotifications");


    const globalSearch =
        document.getElementById("supportGlobalSearch");

    const ticketSearch =
        document.getElementById("ticketSearch");

    const statusFilter =
        document.getElementById("ticketStatusFilter");

    const priorityFilter =
        document.getElementById("priorityFilter");

    const categoryFilter =
        document.getElementById("categoryFilter");


    const tableBody =
        document.getElementById("ticketTableBody");

    const emptyState =
        document.getElementById("supportEmpty");

    const previousButton =
        document.getElementById("ticketPrev");

    const nextButton =
        document.getElementById("ticketNext");

    const pagesContainer =
        document.getElementById("ticketPages");

    const showingText =
        document.getElementById("ticketShowingText");


    const toast =
        document.getElementById("adminToast");


    /* =====================================================
       TICKET DATA
    ====================================================== */

    let tickets = [

        {
            id:"TKT-00486",
            customer:"Aarav Mehta",
            email:"aarav.mehta@example.com",
            avatar:"AM",
            order:"#OZZO1028",
            subject:"Order has not arrived yet",
            message:"My order was supposed to arrive yesterday, but I have not received it yet. Please check the current delivery status.",
            category:"Order",
            priority:"High",
            status:"Open",
            updated:"18 Sep, 10:42 AM"
        },

        {
            id:"TKT-00485",
            customer:"Priya Sharma",
            email:"priya.sharma@example.com",
            avatar:"PS",
            order:"#OZZO1027",
            subject:"Payment deducted twice",
            message:"The payment was deducted twice from my account for the same order. Please help with the refund.",
            category:"Payment",
            priority:"High",
            status:"In Progress",
            updated:"18 Sep, 10:12 AM"
        },

        {
            id:"TKT-00484",
            customer:"Rahul Verma",
            email:"rahul.verma@example.com",
            avatar:"RV",
            order:"#OZZO1026",
            subject:"Need return pickup",
            message:"I submitted a return request yesterday. Please let me know when the pickup will be scheduled.",
            category:"Return",
            priority:"Medium",
            status:"Open",
            updated:"18 Sep, 09:45 AM"
        },

        {
            id:"TKT-00483",
            customer:"Sneha Reddy",
            email:"sneha.reddy@example.com",
            avatar:"SR",
            order:"#OZZO1025",
            subject:"Product received damaged",
            message:"The product arrived with visible damage. I have uploaded photos and need a replacement.",
            category:"Product",
            priority:"High",
            status:"Escalated",
            updated:"18 Sep, 09:15 AM"
        },

        {
            id:"TKT-00482",
            customer:"Vikram Rao",
            email:"vikram.rao@example.com",
            avatar:"VR",
            order:"#OZZO1024",
            subject:"Wrong product delivered",
            message:"I ordered a notebook set but received a different item. Please arrange the correct product.",
            category:"Product",
            priority:"Medium",
            status:"Open",
            updated:"17 Sep, 06:40 PM"
        },

        {
            id:"TKT-00481",
            customer:"Ananya Nair",
            email:"ananya.nair@example.com",
            avatar:"AN",
            order:"#OZZO1023",
            subject:"Refund status update",
            message:"Could you please let me know when I can expect the refund for my returned order?",
            category:"Payment",
            priority:"Medium",
            status:"In Progress",
            updated:"17 Sep, 05:55 PM"
        },

        {
            id:"TKT-00480",
            customer:"Karan Singh",
            email:"karan.singh@example.com",
            avatar:"KS",
            order:"#OZZO1022",
            subject:"Change delivery address",
            message:"I need to update my delivery address before the order is shipped.",
            category:"Order",
            priority:"Low",
            status:"Resolved",
            updated:"17 Sep, 04:22 PM"
        },

        {
            id:"TKT-00479",
            customer:"Meera Kapoor",
            email:"meera.kapoor@example.com",
            avatar:"MK",
            order:"#OZZO1021",
            subject:"Item missing from package",
            message:"One product is missing from my package. The invoice lists two products but only one was delivered.",
            category:"Order",
            priority:"High",
            status:"Open",
            updated:"17 Sep, 03:48 PM"
        },

        {
            id:"TKT-00478",
            customer:"Arjun Patel",
            email:"arjun.patel@example.com",
            avatar:"AP",
            order:"#OZZO1020",
            subject:"Coupon not working",
            message:"The discount coupon shown on the website is not applying during checkout.",
            category:"Payment",
            priority:"Low",
            status:"Resolved",
            updated:"17 Sep, 02:30 PM"
        },

        {
            id:"TKT-00477",
            customer:"Ishita Joshi",
            email:"ishita.joshi@example.com",
            avatar:"IJ",
            order:"#OZZO1019",
            subject:"Size exchange request",
            message:"I received the product but need to exchange it for a larger size.",
            category:"Return",
            priority:"Medium",
            status:"Open",
            updated:"17 Sep, 01:20 PM"
        },

        {
            id:"TKT-00476",
            customer:"Rohan Desai",
            email:"rohan.desai@example.com",
            avatar:"RD",
            order:"#OZZO1018",
            subject:"Delivery delay",
            message:"My package has been stuck at the sorting center for two days. Please check with the courier.",
            category:"Order",
            priority:"Medium",
            status:"In Progress",
            updated:"16 Sep, 06:30 PM"
        },

        {
            id:"TKT-00475",
            customer:"Divya Rao",
            email:"divya.rao@example.com",
            avatar:"DR",
            order:"#OZZO1017",
            subject:"Product specification question",
            message:"I need more information about the product materials before placing another order.",
            category:"Product",
            priority:"Low",
            status:"Resolved",
            updated:"16 Sep, 04:55 PM"
        },

        {
            id:"TKT-00474",
            customer:"Nikhil Kumar",
            email:"nikhil.kumar@example.com",
            avatar:"NK",
            order:"#OZZO1016",
            subject:"Order cancellation",
            message:"I would like to cancel my order before it is shipped.",
            category:"Order",
            priority:"Medium",
            status:"Resolved",
            updated:"16 Sep, 03:40 PM"
        },

        {
            id:"TKT-00473",
            customer:"Pooja Shah",
            email:"pooja.shah@example.com",
            avatar:"PS",
            order:"#OZZO1015",
            subject:"Refund not received",
            message:"My return was approved several days ago but I have not received the refund yet.",
            category:"Payment",
            priority:"High",
            status:"Escalated",
            updated:"16 Sep, 01:15 PM"
        },

        {
            id:"TKT-00472",
            customer:"Sameer Khan",
            email:"sameer.khan@example.com",
            avatar:"SK",
            order:"#OZZO1014",
            subject:"Return policy question",
            message:"Can you explain the return window and eligibility for opened products?",
            category:"Return",
            priority:"Low",
            status:"Resolved",
            updated:"15 Sep, 05:25 PM"
        },

        {
            id:"TKT-00471",
            customer:"Kavya Menon",
            email:"kavya.menon@example.com",
            avatar:"KM",
            order:"#OZZO1013",
            subject:"Need invoice copy",
            message:"Please send me a copy of the invoice for my recent purchase.",
            category:"Order",
            priority:"Low",
            status:"Resolved",
            updated:"15 Sep, 03:10 PM"
        }

    ];


    /* =====================================================
       PAGINATION
    ====================================================== */

    let currentPage = 1;

    const rowsPerPage = 8;

    let activeTicketId = null;


    /* =====================================================
       MODAL
    ====================================================== */

    const modalElement =
        document.getElementById("ticketModal");

    const ticketModal =
        new bootstrap.Modal(
            modalElement
        );


    /* =====================================================
       STATUS CLASS
    ====================================================== */

    function getStatusClass(status){

        return status
            .toLowerCase()
            .replace(/\s+/g, "-");

    }


    /* =====================================================
       PRIORITY CLASS
    ====================================================== */

    function getPriorityClass(priority){

        return priority.toLowerCase();

    }


    /* =====================================================
       FILTER
    ====================================================== */

    function getFilteredTickets(){

        const query =
            ticketSearch.value
                .trim()
                .toLowerCase();

        const status =
            statusFilter.value;

        const priority =
            priorityFilter.value;

        const category =
            categoryFilter.value;


        return tickets.filter(
            function(ticket){

                const searchable = (

                    ticket.id +
                    " " +
                    ticket.customer +
                    " " +
                    ticket.email +
                    " " +
                    ticket.order +
                    " " +
                    ticket.subject +
                    " " +
                    ticket.message +
                    " " +
                    ticket.category

                ).toLowerCase();


                const matchesSearch =
                    !query ||
                    searchable.includes(query);


                const matchesStatus =
                    status === "all" ||
                    ticket.status === status;


                const matchesPriority =
                    priority === "all" ||
                    ticket.priority === priority;


                const matchesCategory =
                    category === "all" ||
                    ticket.category === category;


                return (
                    matchesSearch &&
                    matchesStatus &&
                    matchesPriority &&
                    matchesCategory
                );

            }
        );

    }


    /* =====================================================
       RENDER TICKETS
    ====================================================== */

    function renderTickets(){

        const filtered =
            getFilteredTickets();


        const totalPages =
            Math.max(
                1,
                Math.ceil(
                    filtered.length /
                    rowsPerPage
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
                currentPage - 1
            ) *
            rowsPerPage;


        const end =
            Math.min(
                start +
                rowsPerPage,
                filtered.length
            );


        const pageData =
            filtered.slice(
                start,
                end
            );


        tableBody.innerHTML = "";


        if(
            filtered.length === 0
        ){

            emptyState.classList.remove(
                "d-none"
            );


            document.querySelector(
                ".admin-table-wrapper"
            ).style.display =
                "none";


            showingText.textContent =
                "No tickets found";


        }else{

            emptyState.classList.add(
                "d-none"
            );


            document.querySelector(
                ".admin-table-wrapper"
            ).style.display =
                "";


            pageData.forEach(
                function(ticket){

                    const row =
                        document.createElement("tr");


                    row.innerHTML = `

                        <td>

                            <div class="ticket-cell">

                                <span class="ticket-id">
                                    ${ticket.id}
                                </span>

                                <span class="ticket-time">
                                    ${ticket.updated}
                                </span>

                            </div>

                        </td>


                        <td>

                            <div class="ticket-customer-cell">

                                <div class="ticket-avatar">
                                    ${ticket.avatar}
                                </div>


                                <div class="ticket-customer-info">

                                    <strong>
                                        ${ticket.customer}
                                    </strong>

                                    <small>
                                        ${ticket.order}
                                    </small>

                                </div>

                            </div>

                        </td>


                        <td>

                            <div class="ticket-subject">

                                <strong title="${ticket.subject}">
                                    ${ticket.subject}
                                </strong>

                                <small title="${ticket.message}">
                                    ${ticket.message}
                                </small>

                            </div>

                        </td>


                        <td>

                            <span class="ticket-category">
                                ${ticket.category}
                            </span>

                        </td>


                        <td>

                            <span
                                class="
                                    priority-badge
                                    ${getPriorityClass(
                                        ticket.priority
                                    )}
                                "
                            >
                                ${ticket.priority}
                            </span>

                        </td>


                        <td>

                            <span
                                class="
                                    ticket-status
                                    ${getStatusClass(
                                        ticket.status
                                    )}
                            "
                            >
                                ${ticket.status}
                            </span>

                        </td>


                        <td>

                            <span class="ticket-updated">
                                ${ticket.updated}
                            </span>

                        </td>


                        <td>

                            <div class="ticket-actions">

                                <button
                                    class="ticket-action"
                                    type="button"
                                    data-action="view"
                                    data-id="${ticket.id}"
                                    title="View ticket"
                                >

                                    <i
                                        class="fa-regular fa-eye"
                                    ></i>

                                </button>


                                ${
                                    ticket.status !== "Resolved"
                                    ?
                                    `
                                    <button
                                        class="ticket-action"
                                        type="button"
                                        data-action="resolve"
                                        data-id="${ticket.id}"
                                        title="Resolve ticket"
                                    >

                                        <i
                                            class="fa-solid fa-check"
                                        ></i>

                                    </button>
                                    `
                                    :
                                    `
                                    <button
                                        class="ticket-action"
                                        type="button"
                                        data-action="reopen"
                                        data-id="${ticket.id}"
                                        title="Reopen ticket"
                                    >

                                        <i
                                            class="fa-solid fa-rotate-left"
                                        ></i>

                                    </button>
                                    `
                                }


                                <button
                                    class="
                                        ticket-action
                                        delete
                                    "
                                    type="button"
                                    data-action="delete"
                                    data-id="${ticket.id}"
                                    title="Delete ticket"
                                >

                                    <i
                                        class="fa-solid fa-trash"
                                    ></i>

                                </button>

                            </div>

                        </td>

                    `;


                    tableBody.appendChild(
                        row
                    );

                }
            );


            showingText.textContent =
                `Showing ${
                    start + 1
                }–${
                    end
                } of ${
                    filtered.length
                } tickets`;

        }


        renderPagination(
            totalPages
        );

    }


    /* =====================================================
       PAGINATION
    ====================================================== */

    function renderPagination(
        totalPages
    ){

        pagesContainer.innerHTML = "";


        for(
            let page = 1;
            page <= totalPages;
            page++
        ){

            const button =
                document.createElement("button");


            button.type =
                "button";


            button.className =
                "ticket-page-number";


            if(
                page === currentPage
            ){

                button.classList.add(
                    "active"
                );

            }


            button.textContent =
                page;


            button.addEventListener(
                "click",
                function(){

                    currentPage =
                        page;

                    renderTickets();

                }
            );


            pagesContainer.appendChild(
                button
            );

        }


        previousButton.disabled =
            currentPage === 1;


        nextButton.disabled =
            currentPage === totalPages;

    }


    previousButton.addEventListener(
        "click",
        function(){

            if(
                currentPage > 1
            ){

                currentPage--;

                renderTickets();

            }

        }
    );


    nextButton.addEventListener(
        "click",
        function(){

            const totalPages =
                Math.max(
                    1,
                    Math.ceil(
                        getFilteredTickets()
                            .length /
                        rowsPerPage
                    )
                );


            if(
                currentPage <
                totalPages
            ){

                currentPage++;

                renderTickets();

            }

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ====================================================== */

    tableBody.addEventListener(
        "click",
        function(event){

            const button =
                event.target.closest(
                    "[data-action]"
                );


            if(!button){
                return;
            }


            const action =
                button.dataset.action;

            const id =
                button.dataset.id;


            if(
                action === "view"
            ){

                openTicket(id);

            }


            else if(
                action === "resolve"
            ){

                updateTicketStatus(
                    id,
                    "Resolved"
                );

            }


            else if(
                action === "reopen"
            ){

                updateTicketStatus(
                    id,
                    "Open"
                );

            }


            else if(
                action === "delete"
            ){

                deleteTicket(id);

            }

        }
    );


    /* =====================================================
       UPDATE STATUS
    ====================================================== */

    function updateTicketStatus(
        id,
        status
    ){

        const ticket =
            tickets.find(
                item =>
                    item.id === id
            );


        if(!ticket){
            return;
        }


        ticket.status =
            status;


        showToast(
            status === "Resolved"
                ? "Ticket resolved successfully"
                : "Ticket reopened successfully"
        );


        renderTickets();

    }


    /* =====================================================
       DELETE
    ====================================================== */

    function deleteTicket(
        id
    ){

        const ticket =
            tickets.find(
                item =>
                    item.id === id
            );


        if(!ticket){
            return;
        }


        const confirmed =
            window.confirm(
                `Delete ${ticket.id}?`
            );


        if(!confirmed){
            return;
        }


        tickets =
            tickets.filter(
                item =>
                    item.id !== id
            );


        showToast(
            "Ticket deleted successfully"
        );


        renderTickets();

    }


    /* =====================================================
       FILTER EVENTS
    ====================================================== */

    [
        ticketSearch,
        statusFilter,
        priorityFilter,
        categoryFilter
    ].forEach(
        function(element){

            element.addEventListener(
                "input",
                function(){

                    currentPage =
                        1;

                    renderTickets();

                }
            );


            element.addEventListener(
                "change",
                function(){

                    currentPage =
                        1;

                    renderTickets();

                }
            );

        }
    );


    /* =====================================================
       GLOBAL SEARCH
    ====================================================== */

    globalSearch.addEventListener(
        "input",
        function(){

            ticketSearch.value =
                globalSearch.value;

            currentPage =
                1;

            renderTickets();

        }
    );


    /* =====================================================
       OPEN TICKET
    ====================================================== */

    function openTicket(
        id
    ){

        const ticket =
            tickets.find(
                item =>
                    item.id === id
            );


        if(!ticket){
            return;
        }


        activeTicketId =
            id;


        document.getElementById(
            "modalTicketAvatar"
        ).textContent =
            ticket.avatar;


        document.getElementById(
            "modalTicketCustomer"
        ).textContent =
            ticket.customer;


        document.getElementById(
            "modalTicketEmail"
        ).textContent =
            ticket.email;


        const modalStatus =
            document.getElementById(
                "modalTicketStatus"
            );


        modalStatus.textContent =
            ticket.status;


        if(
            ticket.status === "Resolved"
        ){

            modalStatus.style.background =
                "var(--green)";

            modalStatus.style.color =
                "#315b4f";

        }
        else if(
            ticket.status === "In Progress"
        ){

            modalStatus.style.background =
                "var(--blue)";

            modalStatus.style.color =
                "#496d84";

        }
        else if(
            ticket.status === "Escalated"
        ){

            modalStatus.style.background =
                "#f7e1df";

            modalStatus.style.color =
                "var(--danger)";

        }
        else{

            modalStatus.style.background =
                "var(--pink)";

            modalStatus.style.color =
                "#915541";

        }


        document.getElementById(
            "modalTicketId"
        ).textContent =
            ticket.id;


        document.getElementById(
            "modalTicketOrder"
        ).textContent =
            ticket.order;


        document.getElementById(
            "modalTicketCategory"
        ).textContent =
            ticket.category;


        document.getElementById(
            "modalTicketPriority"
        ).textContent =
            ticket.priority;


        document.getElementById(
            "modalTicketSubject"
        ).textContent =
            ticket.subject;


        document.getElementById(
            "modalTicketMessage"
        ).textContent =
            ticket.message;


        document.getElementById(
            "ticketReply"
        ).value =
            "";


        ticketModal.show();

    }


    /* =====================================================
       SEND REPLY
    ====================================================== */

    document
        .getElementById("sendTicketReply")
        .addEventListener(
            "click",
            function(){

                const reply =
                    document.getElementById(
                        "ticketReply"
                    )
                    .value
                    .trim();


                if(
                    !activeTicketId
                ){

                    showToast(
                        "Select a ticket first"
                    );

                    return;
                }


                if(
                    !reply
                ){

                    showToast(
                        "Please write a reply"
                    );

                    return;
                }


                const ticket =
                    tickets.find(
                        item =>
                            item.id === activeTicketId
                    );


                if(
                    ticket &&
                    ticket.status === "Open"
                ){

                    ticket.status =
                        "In Progress";

                }


                ticketModal.hide();


                showToast(
                    "Customer reply sent successfully"
                );


                renderTickets();

            }
        );


    /* =====================================================
       EXPORT CSV
    ====================================================== */

    document
        .getElementById("exportTickets")
        .addEventListener(
            "click",
            function(){

                const filtered =
                    getFilteredTickets();


                if(
                    filtered.length === 0
                ){

                    showToast(
                        "No tickets available to export"
                    );

                    return;
                }


                const headers = [

                    "Ticket ID",
                    "Customer",
                    "Email",
                    "Order",
                    "Subject",
                    "Message",
                    "Category",
                    "Priority",
                    "Status",
                    "Updated"

                ];


                const lines = [

                    headers.join(",")

                ];


                filtered.forEach(
                    function(ticket){

                        const values = [

                            ticket.id,
                            ticket.customer,
                            ticket.email,
                            ticket.order,
                            ticket.subject,
                            ticket.message,
                            ticket.category,
                            ticket.priority,
                            ticket.status,
                            ticket.updated

                        ];


                        lines.push(

                            values
                                .map(
                                    value =>
                                        `"${String(value)
                                            .replace(
                                                /"/g,
                                                '""'
                                            )}"`
                                )
                                .join(",")

                        );

                    }
                );


                const blob =
                    new Blob(
                        [
                            lines.join("\n")
                        ],
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
                    "ozzo-support-tickets.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    `${filtered.length} ticket(s) exported`
                );

            }
        );


    /* =====================================================
       REFRESH
    ====================================================== */

    document
        .getElementById("refreshTickets")
        .addEventListener(
            "click",
            function(){

                renderTickets();


                showToast(
                    "Support tickets refreshed successfully"
                );

            }
        );


    /* =====================================================
       NOTIFICATIONS
    ====================================================== */

    function toggleNotifications(){

        notificationPanel.classList.toggle(
            "show"
        );

    }


    notificationBtn.addEventListener(
        "click",
        toggleNotifications
    );


    mobileNotificationBtn.addEventListener(
        "click",
        toggleNotifications
    );


    closeNotifications.addEventListener(
        "click",
        function(){

            notificationPanel.classList.remove(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function(event){

            const clickedInsidePanel =
                notificationPanel.contains(
                    event.target
                );


            const clickedDesktopButton =
                notificationBtn.contains(
                    event.target
                );


            const clickedMobileButton =
                mobileNotificationBtn.contains(
                    event.target
                );


            if(
                !clickedInsidePanel &&
                !clickedDesktopButton &&
                !clickedMobileButton
            ){

                notificationPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       MOBILE SIDEBAR
    ====================================================== */

    function openSidebar(){

        sidebar.classList.add(
            "show"
        );

        overlay.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeSidebar(){

        sidebar.classList.remove(
            "show"
        );

        overlay.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    mobileMenuBtn.addEventListener(
        "click",
        openSidebar
    );


    overlay.addEventListener(
        "click",
        closeSidebar
    );


    /* =====================================================
       CLOSE SIDEBAR AFTER NAVIGATION ON MOBILE
    ====================================================== */

    document.querySelectorAll(
        ".admin-nav-link"
    ).forEach(
        function(link){

            link.addEventListener(
                "click",
                function(){

                    if(
                        window.innerWidth <
                        992
                    ){

                        closeSidebar();

                    }

                }
            );

        }
    );


    /* =====================================================
       LOGOUT
    ====================================================== */

    document
        .getElementById("logoutBtn")
        .addEventListener(
            "click",
            function(){

                const confirmed =
                    window.confirm(
                        "Are you sure you want to logout?"
                    );


                if(
                    confirmed
                ){

                    showToast(
                        "Logout action is ready to connect"
                    );

                }

            }
        );


    /* =====================================================
       SUPPORT RANGE
    ====================================================== */

    document
        .getElementById("supportRange")
        .addEventListener(
            "change",
            function(){

                showToast(
                    `Support data updated for ${this.options[this.selectedIndex].text}`
                );

            }
        );


    /* =====================================================
       DATE
    ====================================================== */

    document.getElementById(
        "currentDate"
    ).textContent =
        new Date().toLocaleDateString(
            "en-IN",
            {
                month:"long",
                year:"numeric"
            }
        );


    /* =====================================================
       TOAST
    ====================================================== */

    let toastTimer;


    function showToast(
        message
    ){

        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                function(){

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }


    /* =====================================================
       INITIAL RENDER
    ====================================================== */

    renderTickets();

});