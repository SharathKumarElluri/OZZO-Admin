document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DATA
    ====================================================== */

    let franchises = [

        {
            id:1,
            name:"OZZO Hyderabad Central",
            owner:"Ravi Kumar",
            email:"ravi@example.com",
            phone:"9876543210",
            model:"Retail Store",
            city:"Hyderabad",
            orders:612,
            revenue:642820,
            investment:1800000,
            joined:"2026-01-12",
            status:"Active",
            address:"Banjara Hills, Hyderabad"
        },

        {
            id:2,
            name:"OZZO Bengaluru East",
            owner:"Arjun Rao",
            email:"arjun@example.com",
            phone:"9876501234",
            model:"Premium Store",
            city:"Bengaluru",
            orders:548,
            revenue:578460,
            investment:2400000,
            joined:"2026-01-25",
            status:"Active",
            address:"Indiranagar, Bengaluru"
        },

        {
            id:3,
            name:"OZZO Chennai Central",
            owner:"Priya Menon",
            email:"priya@example.com",
            phone:"9867012456",
            model:"Retail Store",
            city:"Chennai",
            orders:462,
            revenue:496240,
            investment:1800000,
            joined:"2026-02-08",
            status:"Active",
            address:"Anna Nagar, Chennai"
        },

        {
            id:4,
            name:"OZZO Mumbai West",
            owner:"Nikhil Shah",
            email:"nikhil@example.com",
            phone:"9842012345",
            model:"Premium Store",
            city:"Mumbai",
            orders:391,
            revenue:428680,
            investment:2400000,
            joined:"2026-02-19",
            status:"Active",
            address:"Andheri West, Mumbai"
        },

        {
            id:5,
            name:"OZZO Hyderabad North",
            owner:"Sandeep Reddy",
            email:"sandeep@example.com",
            phone:"9959123456",
            model:"Express Store",
            city:"Hyderabad",
            orders:328,
            revenue:346520,
            investment:1200000,
            joined:"2026-03-04",
            status:"Active",
            address:"Kukatpally, Hyderabad"
        },

        {
            id:6,
            name:"OZZO Bengaluru South",
            owner:"Kiran Bhat",
            email:"kiran@example.com",
            phone:"9987654321",
            model:"Retail Store",
            city:"Bengaluru",
            orders:286,
            revenue:302180,
            investment:1800000,
            joined:"2026-03-18",
            status:"Active",
            address:"JP Nagar, Bengaluru"
        },

        {
            id:7,
            name:"OZZO Pune Central",
            owner:"Aditya Joshi",
            email:"aditya@example.com",
            phone:"9876001122",
            model:"Express Store",
            city:"Pune",
            orders:214,
            revenue:246740,
            investment:1200000,
            joined:"2026-04-06",
            status:"Pending",
            address:"Kothrud, Pune"
        },

        {
            id:8,
            name:"OZZO Chennai South",
            owner:"Meera Krishnan",
            email:"meera@example.com",
            phone:"9791002233",
            model:"Retail Store",
            city:"Chennai",
            orders:188,
            revenue:218560,
            investment:1800000,
            joined:"2026-04-21",
            status:"Pending",
            address:"Adyar, Chennai"
        },

        {
            id:9,
            name:"OZZO Mumbai East",
            owner:"Amit Verma",
            email:"amit@example.com",
            phone:"9888123456",
            model:"Express Store",
            city:"Mumbai",
            orders:162,
            revenue:184620,
            investment:1200000,
            joined:"2026-05-09",
            status:"Pending",
            address:"Powai, Mumbai"
        },

        {
            id:10,
            name:"OZZO Pune West",
            owner:"Rahul Patil",
            email:"rahul@example.com",
            phone:"9899012345",
            model:"Premium Store",
            city:"Pune",
            orders:124,
            revenue:168740,
            investment:2400000,
            joined:"2026-05-24",
            status:"Suspended",
            address:"Baner, Pune"
        },

        {
            id:11,
            name:"OZZO Hyderabad West",
            owner:"Vijay Rao",
            email:"vijay@example.com",
            phone:"9877112233",
            model:"Express Store",
            city:"Hyderabad",
            orders:108,
            revenue:142680,
            investment:1200000,
            joined:"2026-06-18",
            status:"Inactive",
            address:"Madhapur, Hyderabad"
        },

        {
            id:12,
            name:"OZZO Bengaluru North",
            owner:"Manoj Shetty",
            email:"manoj@example.com",
            phone:"9866012233",
            model:"Retail Store",
            city:"Bengaluru",
            orders:96,
            revenue:126420,
            investment:1800000,
            joined:"2026-07-07",
            status:"Pending",
            address:"Yelahanka, Bengaluru"
        }

    ];


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const tableBody =
        document.getElementById(
            "franchiseTableBody"
        );

    const franchiseSearch =
        document.getElementById(
            "franchiseSearch"
        );

    const adminSearch =
        document.getElementById(
            "adminSearch"
        );

    const statusFilter =
        document.getElementById(
            "statusFilter"
        );

    const cityFilter =
        document.getElementById(
            "cityFilter"
        );

    const modelFilter =
        document.getElementById(
            "modelFilter"
        );

    const clearFilters =
        document.getElementById(
            "clearFilters"
        );

    const selectAll =
        document.getElementById(
            "selectAll"
        );

    const selectedCount =
        document.getElementById(
            "selectedCount"
        );

    const paginationInfo =
        document.getElementById(
            "paginationInfo"
        );

    const paginationButtons =
        document.getElementById(
            "paginationButtons"
        );


    const rowsPerPage = 5;

    let currentPage = 1;


    /* =====================================================
       MODAL
    ====================================================== */

    const franchiseModalElement =
        document.getElementById(
            "franchiseModal"
        );

    const franchiseModal =
        new bootstrap.Modal(
            franchiseModalElement
        );


    const franchiseForm =
        document.getElementById(
            "franchiseForm"
        );

    const modalTitle =
        document.getElementById(
            "modalTitle"
        );

    const franchiseId =
        document.getElementById(
            "franchiseId"
        );

    const franchiseName =
        document.getElementById(
            "franchiseName"
        );

    const ownerName =
        document.getElementById(
            "ownerName"
        );

    const franchiseEmail =
        document.getElementById(
            "franchiseEmail"
        );

    const franchisePhone =
        document.getElementById(
            "franchisePhone"
        );

    const storeModel =
        document.getElementById(
            "storeModel"
        );

    const franchiseCity =
        document.getElementById(
            "franchiseCity"
        );

    const franchiseStatus =
        document.getElementById(
            "franchiseStatus"
        );

    const franchiseOrders =
        document.getElementById(
            "franchiseOrders"
        );

    const franchiseRevenue =
        document.getElementById(
            "franchiseRevenue"
        );

    const franchiseInvestment =
        document.getElementById(
            "franchiseInvestment"
        );

    const franchiseJoined =
        document.getElementById(
            "franchiseJoined"
        );

    const franchiseAddress =
        document.getElementById(
            "franchiseAddress"
        );


    /* =====================================================
       TOAST
    ====================================================== */

    const toast =
        document.getElementById(
            "adminToast"
        );

    let toastTimer;


    function showToast(message){

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(toastTimer);

        toastTimer =
            setTimeout(
                function(){

                    toast.classList.remove(
                        "show"
                    );

                },
                2800
            );

    }


    /* =====================================================
       HELPERS
    ====================================================== */

    function formatNumber(value){

        return Number(
            value
        ).toLocaleString(
            "en-IN"
        );

    }


    function formatCurrency(value){

        return (
            "₹" +
            Number(value).toLocaleString(
                "en-IN"
            )
        );

    }


    function formatDate(value){

        if(!value){
            return "-";
        }

        const date =
            new Date(value);

        return date.toLocaleDateString(
            "en-IN",
            {
                day:"2-digit",
                month:"short",
                year:"numeric"
            }
        );

    }


    function initials(name){

        return name
            .split(" ")
            .filter(Boolean)
            .slice(0,2)
            .map(
                word =>
                    word.charAt(0)
            )
            .join("")
            .toUpperCase();

    }


    function statusClass(status){

        switch(status){

            case "Active":
                return "status-active";

            case "Pending":
                return "status-pending";

            case "Suspended":
                return "status-suspended";

            default:
                return "status-inactive";

        }

    }


    /* =====================================================
       FILTER DATA
    ====================================================== */

    function getFilteredData(){

        const search =
            franchiseSearch.value
                .trim()
                .toLowerCase();

        const status =
            statusFilter.value;

        const city =
            cityFilter.value;

        const model =
            modelFilter.value;


        return franchises.filter(
            function(franchise){

                const matchesSearch =
                    !search ||

                    franchise.name
                        .toLowerCase()
                        .includes(search) ||

                    franchise.owner
                        .toLowerCase()
                        .includes(search) ||

                    franchise.email
                        .toLowerCase()
                        .includes(search) ||

                    franchise.phone
                        .includes(search);


                const matchesStatus =
                    !status ||
                    franchise.status === status;


                const matchesCity =
                    !city ||
                    franchise.city === city;


                const matchesModel =
                    !model ||
                    franchise.model === model;


                return (
                    matchesSearch &&
                    matchesStatus &&
                    matchesCity &&
                    matchesModel
                );

            }
        );

    }


    /* =====================================================
       RENDER
    ====================================================== */

    function renderTable(){

        const filtered =
            getFilteredData();


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
            (currentPage - 1) *
            rowsPerPage;


        const end =
            start +
            rowsPerPage;


        const currentRows =
            filtered.slice(
                start,
                end
            );


        tableBody.innerHTML = "";


        if(
            currentRows.length === 0
        ){

            tableBody.innerHTML = `

                <tr>

                    <td
                        colspan="9"
                        style="
                        text-align:center;
                        padding:35px;
                        color:#8a96a0;
                        "
                    >

                        No franchise records found.

                    </td>

                </tr>

            `;

        }
        else{

            currentRows.forEach(
                function(franchise){

                    const row =
                        document.createElement(
                            "tr"
                        );


                    row.innerHTML = `

                        <td>

                            <input
                                type="checkbox"
                                class="franchise-checkbox"
                                value="${franchise.id}"
                            >

                        </td>


                        <td>

                            <div class="franchise-cell">

                                <div class="franchise-avatar">

                                    ${initials(
                                        franchise.name
                                    )}

                                </div>


                                <div class="franchise-name">

                                    <strong>
                                        ${franchise.name}
                                    </strong>

                                    <small>
                                        ${franchise.email}
                                    </small>

                                </div>

                            </div>

                        </td>


                        <td>

                            <div class="owner-info">

                                <strong>
                                    ${franchise.owner}
                                </strong>

                                <small>
                                    ${franchise.phone}
                                </small>

                            </div>

                        </td>


                        <td>

                            <span
                                class="model-badge"
                            >

                                ${franchise.model}

                            </span>

                        </td>


                        <td>

                            ${franchise.city}

                        </td>


                        <td>

                            ${formatNumber(
                                franchise.orders
                            )}

                        </td>


                        <td
                            class="revenue-value"
                        >

                            ${formatCurrency(
                                franchise.revenue
                            )}

                        </td>


                        <td>

                            <span
                                class="
                                    status-badge
                                    ${statusClass(
                                        franchise.status
                                    )}
                                "
                            >

                                ${franchise.status}

                            </span>

                        </td>


                        <td>

                            <div
                                class="table-actions"
                            >

                                <button
                                    class="table-action"
                                    type="button"
                                    title="View"
                                    data-action="view"
                                    data-id="${franchise.id}"
                                >

                                    <i
                                        class="fa-regular fa-eye"
                                    ></i>

                                </button>


                                <button
                                    class="table-action"
                                    type="button"
                                    title="Edit"
                                    data-action="edit"
                                    data-id="${franchise.id}"
                                >

                                    <i
                                        class="
                                        fa-regular
                                        fa-pen-to-square
                                        "
                                    ></i>

                                </button>


                                <button
                                    class="
                                    table-action
                                    delete
                                    "
                                    type="button"
                                    title="Delete"
                                    data-action="delete"
                                    data-id="${franchise.id}"
                                >

                                    <i
                                        class="
                                        fa-regular
                                        fa-trash-can
                                        "
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

        }


        const first =
            filtered.length
                ? start + 1
                : 0;


        const last =
            Math.min(
                end,
                filtered.length
            );


        paginationInfo.textContent =
            `Showing ${first}-${last} of ${filtered.length} franchises`;


        renderPagination(
            totalPages
        );


        updateSelection();

    }


    /* =====================================================
       PAGINATION
    ====================================================== */

    function renderPagination(
        totalPages
    ){

        paginationButtons.innerHTML = "";


        const previous =
            document.createElement(
                "button"
            );


        previous.innerHTML =
            `<i class="fa-solid fa-chevron-left"></i>`;


        previous.disabled =
            currentPage === 1;


        previous.addEventListener(
            "click",
            function(){

                if(currentPage > 1){

                    currentPage--;

                    renderTable();

                }

            }
        );


        paginationButtons.appendChild(
            previous
        );


        for(
            let page = 1;
            page <= totalPages;
            page++
        ){

            const button =
                document.createElement(
                    "button"
                );


            button.textContent =
                page;


            if(
                page === currentPage
            ){

                button.classList.add(
                    "active"
                );

            }


            button.addEventListener(
                "click",
                function(){

                    currentPage =
                        page;

                    renderTable();

                }
            );


            paginationButtons.appendChild(
                button
            );

        }


        const next =
            document.createElement(
                "button"
            );


        next.innerHTML =
            `<i class="fa-solid fa-chevron-right"></i>`;


        next.disabled =
            currentPage === totalPages;


        next.addEventListener(
            "click",
            function(){

                if(
                    currentPage <
                    totalPages
                ){

                    currentPage++;

                    renderTable();

                }

            }
        );


        paginationButtons.appendChild(
            next
        );

    }


    /* =====================================================
       SEARCH
    ====================================================== */

    franchiseSearch.addEventListener(
        "input",
        function(){

            currentPage = 1;

            renderTable();

        }
    );


    adminSearch.addEventListener(
        "input",
        function(){

            franchiseSearch.value =
                adminSearch.value;

            currentPage = 1;

            renderTable();

        }
    );


    /* =====================================================
       FILTERS
    ====================================================== */

    statusFilter.addEventListener(
        "change",
        function(){

            currentPage = 1;

            renderTable();

        }
    );


    cityFilter.addEventListener(
        "change",
        function(){

            currentPage = 1;

            renderTable();

        }
    );


    modelFilter.addEventListener(
        "change",
        function(){

            currentPage = 1;

            renderTable();

        }
    );


    clearFilters.addEventListener(
        "click",
        function(){

            franchiseSearch.value =
                "";

            adminSearch.value =
                "";

            statusFilter.value =
                "";

            cityFilter.value =
                "";

            modelFilter.value =
                "";

            currentPage = 1;

            renderTable();

        }
    );


    /* =====================================================
       SELECTION
    ====================================================== */

    selectAll.addEventListener(
        "change",
        function(){

            document
                .querySelectorAll(
                    ".franchise-checkbox"
                )
                .forEach(
                    function(checkbox){

                        checkbox.checked =
                            selectAll.checked;

                    }
                );


            updateSelection();

        }
    );


    document.addEventListener(
        "change",
        function(event){

            if(
                event.target.classList.contains(
                    "franchise-checkbox"
                )
            ){

                updateSelection();

            }

        }
    );


    function getSelectedIds(){

        return [

            ...
            document.querySelectorAll(
                ".franchise-checkbox:checked"
            )

        ].map(
            function(checkbox){

                return Number(
                    checkbox.value
                );

            }
        );

    }


    function updateSelection(){

        const selected =
            getSelectedIds();


        selectedCount.textContent =
            selected.length;


        const checkboxes =
            document.querySelectorAll(
                ".franchise-checkbox"
            );


        selectAll.checked =
            checkboxes.length > 0 &&
            selected.length ===
                checkboxes.length;

    }


    /* =====================================================
       APPROVE
    ====================================================== */

    document
        .getElementById(
            "approveSelected"
        )
        .addEventListener(
            "click",
            function(){

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one franchise."
                    );

                    return;

                }


                franchises =
                    franchises.map(
                        function(franchise){

                            if(
                                ids.includes(
                                    franchise.id
                                )
                            ){

                                return {

                                    ...franchise,

                                    status:"Active"

                                };

                            }


                            return franchise;

                        }
                    );


                showToast(
                    `${ids.length} franchise record${ids.length > 1 ? "s" : ""} approved.`
                );


                renderTable();

            }
        );


    /* =====================================================
       SUSPEND
    ====================================================== */

    document
        .getElementById(
            "suspendSelected"
        )
        .addEventListener(
            "click",
            function(){

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one franchise."
                    );

                    return;

                }


                franchises =
                    franchises.map(
                        function(franchise){

                            if(
                                ids.includes(
                                    franchise.id
                                )
                            ){

                                return {

                                    ...franchise,

                                    status:"Suspended"

                                };

                            }


                            return franchise;

                        }
                    );


                showToast(
                    `${ids.length} franchise record${ids.length > 1 ? "s" : ""} suspended.`
                );


                renderTable();

            }
        );


    /* =====================================================
       DELETE
    ====================================================== */

    document
        .getElementById(
            "deleteSelected"
        )
        .addEventListener(
            "click",
            function(){

                const ids =
                    getSelectedIds();


                if(!ids.length){

                    showToast(
                        "Select at least one franchise."
                    );

                    return;

                }


                if(
                    !confirm(
                        `Delete ${ids.length} selected franchise record${ids.length > 1 ? "s" : ""}?`
                    )
                ){

                    return;

                }


                franchises =
                    franchises.filter(
                        function(franchise){

                            return !ids.includes(
                                franchise.id
                            );

                        }
                    );


                showToast(
                    `${ids.length} franchise record${ids.length > 1 ? "s" : ""} deleted.`
                );


                renderTable();

            }
        );


    /* =====================================================
       EXPORT
    ====================================================== */

    document
        .getElementById(
            "exportFranchises"
        )
        .addEventListener(
            "click",
            function(){

                const rows =
                    getFilteredData();


                if(!rows.length){

                    showToast(
                        "No franchise records to export."
                    );

                    return;

                }


                const headers = [

                    "Franchise",
                    "Owner",
                    "Email",
                    "Phone",
                    "Model",
                    "City",
                    "Orders",
                    "Revenue",
                    "Investment",
                    "Joined",
                    "Status"

                ];


                let csv =
                    headers.join(",")
                    + "\n";


                rows.forEach(
                    function(franchise){

                        const row = [

                            franchise.name,
                            franchise.owner,
                            franchise.email,
                            franchise.phone,
                            franchise.model,
                            franchise.city,
                            franchise.orders,
                            franchise.revenue,
                            franchise.investment,
                            franchise.joined,
                            franchise.status

                        ];


                        csv +=
                            row
                                .map(
                                    function(value){

                                        return `"${String(
                                            value
                                        ).replace(
                                            /"/g,
                                            '""'
                                        )}"`;

                                    }
                                )
                                .join(",")
                            + "\n";

                    }
                );


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


                link.href = url;

                link.download =
                    "ozzo-franchise-data.csv";


                document.body.appendChild(
                    link
                );


                link.click();


                link.remove();


                URL.revokeObjectURL(
                    url
                );


                showToast(
                    `${rows.length} franchise records exported.`
                );

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
                    ".table-action"
                );


            if(!button){
                return;
            }


            const id =
                Number(
                    button.dataset.id
                );


            const action =
                button.dataset.action;


            const franchise =
                franchises.find(
                    function(item){

                        return item.id === id;

                    }
                );


            if(!franchise){
                return;
            }


            if(
                action === "view"
            ){

                showToast(
                    `${franchise.name} · ${franchise.city}`
                );

                return;

            }


            if(
                action === "edit"
            ){

                openEditModal(
                    franchise
                );

                return;

            }


            if(
                action === "delete"
            ){

                if(
                    !confirm(
                        `Delete ${franchise.name}?`
                    )
                ){

                    return;

                }


                franchises =
                    franchises.filter(
                        function(item){

                            return item.id !== id;

                        }
                    );


                showToast(
                    `${franchise.name} deleted.`
                );


                renderTable();

            }

        }
    );


    /* =====================================================
       ADD BUTTON
    ====================================================== */

    document
        .getElementById(
            "addFranchiseBtn"
        )
        .addEventListener(
            "click",
            function(){

                openAddModal();

            }
        );


    function openAddModal(){

        franchiseForm.reset();


        franchiseId.value =
            "";


        franchiseOrders.value =
            0;


        franchiseRevenue.value =
            0;


        franchiseInvestment.value =
            0;


        franchiseStatus.value =
            "Pending";


        franchiseJoined.value =
            new Date()
                .toISOString()
                .split("T")[0];


        modalTitle.textContent =
            "Add Franchise";


        franchiseModal.show();

    }


    /* =====================================================
       EDIT
    ====================================================== */

    function openEditModal(
        franchise
    ){

        franchiseId.value =
            franchise.id;

        franchiseName.value =
            franchise.name;

        ownerName.value =
            franchise.owner;

        franchiseEmail.value =
            franchise.email;

        franchisePhone.value =
            franchise.phone;

        storeModel.value =
            franchise.model;

        franchiseCity.value =
            franchise.city;

        franchiseStatus.value =
            franchise.status;

        franchiseOrders.value =
            franchise.orders;

        franchiseRevenue.value =
            franchise.revenue;

        franchiseInvestment.value =
            franchise.investment;

        franchiseJoined.value =
            franchise.joined;

        franchiseAddress.value =
            franchise.address;


        modalTitle.textContent =
            "Edit Franchise";


        franchiseModal.show();

    }


    /* =====================================================
       SAVE
    ====================================================== */

    franchiseForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            const id =
                franchiseId.value;


            const data = {

                name:
                    franchiseName.value.trim(),

                owner:
                    ownerName.value.trim(),

                email:
                    franchiseEmail.value.trim(),

                phone:
                    franchisePhone.value.trim(),

                model:
                    storeModel.value,

                city:
                    franchiseCity.value,

                status:
                    franchiseStatus.value,

                orders:
                    Number(
                        franchiseOrders.value
                    ) || 0,

                revenue:
                    Number(
                        franchiseRevenue.value
                    ) || 0,

                investment:
                    Number(
                        franchiseInvestment.value
                    ) || 0,

                joined:
                    franchiseJoined.value,

                address:
                    franchiseAddress.value.trim()

            };


            if(id){

                const numericId =
                    Number(id);


                franchises =
                    franchises.map(
                        function(franchise){

                            if(
                                franchise.id ===
                                numericId
                            ){

                                return {

                                    ...franchise,

                                    ...data

                                };

                            }


                            return franchise;

                        }
                    );


                showToast(
                    "Franchise updated successfully."
                );

            }
            else{

                const newId =
                    franchises.length
                        ? Math.max(
                            ...franchises.map(
                                function(item){

                                    return item.id;

                                }
                            )
                        ) + 1
                        : 1;


                franchises.unshift({

                    id:newId,

                    ...data

                });


                showToast(
                    "New franchise added successfully."
                );

            }


            franchiseModal.hide();


            currentPage = 1;


            renderTable();

        }
    );


    /* =====================================================
       PERIOD FILTER
    ====================================================== */

    document
        .getElementById(
            "periodFilter"
        )
        .addEventListener(
            "change",
            function(){

                const values = {

                    month:"14",

                    quarter:"59",

                    year:"142"

                };


                document.getElementById(
                    "applicationTotal"
                ).textContent =
                    values[
                        this.value
                    ];


                showToast(
                    `Showing ${this.options[this.selectedIndex].text}.`
                );

            }
        );


    /* =====================================================
       MOBILE SIDEBAR
    ====================================================== */

    const sidebar =
        document.getElementById(
            "adminSidebar"
        );

    const overlay =
        document.getElementById(
            "sidebarOverlay"
        );

    const mobileMenuBtn =
        document.getElementById(
            "mobileMenuBtn"
        );


    mobileMenuBtn.addEventListener(
        "click",
        function(){

            sidebar.classList.add(
                "show"
            );

            overlay.classList.add(
                "show"
            );

        }
    );


    overlay.addEventListener(
        "click",
        function(){

            sidebar.classList.remove(
                "show"
            );

            overlay.classList.remove(
                "show"
            );

        }
    );


    document
        .querySelectorAll(
            ".admin-nav-link"
        )
        .forEach(
            function(link){

                link.addEventListener(
                    "click",
                    function(){

                        if(
                            window.innerWidth <=
                            991.98
                        ){

                            sidebar.classList.remove(
                                "show"
                            );

                            overlay.classList.remove(
                                "show"
                            );

                        }

                    }
                );

            }
        );


    /* =====================================================
       NOTIFICATIONS
    ====================================================== */

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

            if(
                notificationPanel.classList.contains(
                    "show"
                ) &&

                !notificationPanel.contains(
                    event.target
                ) &&

                !notificationBtn.contains(
                    event.target
                ) &&

                !mobileNotificationBtn.contains(
                    event.target
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
    ====================================================== */

    document
        .getElementById(
            "logoutBtn"
        )
        .addEventListener(
            "click",
            function(){

                if(
                    confirm(
                        "Are you sure you want to logout?"
                    )
                ){

                    showToast(
                        "Logout action selected."
                    );

                }

            }
        );


    /* =====================================================
       INITIAL RENDER
    ====================================================== */

    renderTable();

});