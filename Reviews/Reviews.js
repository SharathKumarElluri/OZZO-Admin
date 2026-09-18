/* =========================================================
   OZZO REVIEWS
   SAME ADMIN BEHAVIOUR AS INDEX.JS
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
        document.getElementById("reviewGlobalSearch");

    const reviewSearch =
        document.getElementById("reviewSearch");

    const statusFilter =
        document.getElementById("statusFilter");

    const ratingFilter =
        document.getElementById("ratingFilter");

    const purchaseFilter =
        document.getElementById("purchaseFilter");

    const tableBody =
        document.getElementById("reviewTableBody");

    const emptyState =
        document.getElementById("reviewEmpty");

    const selectAll =
        document.getElementById("selectAllReviews");

    const bulkBar =
        document.getElementById("reviewBulkBar");

    const selectedCount =
        document.getElementById("selectedReviewCount");

    const prevButton =
        document.getElementById("reviewPrev");

    const nextButton =
        document.getElementById("reviewNext");

    const pageContainer =
        document.getElementById("reviewPages");

    const showingText =
        document.getElementById("reviewShowingText");

    const toast =
        document.getElementById("adminToast");


    /* =====================================================
       REVIEW DATA
    ====================================================== */

    let reviews = [

        {
            id:"REV-001486",
            customer:"Aarav Mehta",
            email:"aarav.mehta@example.com",
            avatar:"AM",

            product:"Classic Beige Dress",
            sku:"OZZO-F001",
            category:"Fashion",

            image:"../women shirt.jpg",

            rating:5,

            title:"Excellent quality",

            message:
                "Excellent quality and very comfortable. The fabric feels premium and the fitting is perfect.",

            verified:true,

            status:"Published",

            date:"15 Sep 2026",

            order:"#OZZO-45821",

            helpful:24,

            reported:false
        },


        {
            id:"REV-001485",
            customer:"Priya Sharma",
            email:"priya.sharma@example.com",
            avatar:"PS",

            product:"Atomic Habits",
            sku:"OZZO-B001",
            category:"Books",

            image:"../book.jpg",

            rating:5,

            title:"Must read",

            message:
                "One of the most practical books I have read. The content is simple and very useful.",

            verified:true,

            status:"Published",

            date:"15 Sep 2026",

            order:"#OZZO-45807",

            helpful:32,

            reported:false
        },


        {
            id:"REV-001484",
            customer:"Rahul Verma",
            email:"rahul.verma@example.com",
            avatar:"RV",

            product:"Classic Casual Shirt",
            sku:"OZZO-F002",
            category:"Fashion",

            image:"../hoddie.jpg",

            rating:4,

            title:"Good shirt",

            message:
                "Nice material and good fit. The colour is slightly different from the website photos.",

            verified:true,

            status:"Published",

            date:"14 Sep 2026",

            order:"#OZZO-45792",

            helpful:13,

            reported:false
        },


        {
            id:"REV-001483",
            customer:"Sneha Reddy",
            email:"sneha.reddy@example.com",
            avatar:"SR",

            product:"Elegant Rose Silk Saree",
            sku:"OZZO-F007",
            category:"Fashion",

            image:"../saree2.jpg",

            rating:5,

            title:"Beautiful saree",

            message:
                "The saree is absolutely beautiful. Loved the colour, finishing and packaging.",

            verified:true,

            status:"Published",

            date:"14 Sep 2026",

            order:"#OZZO-45768",

            helpful:29,

            reported:false
        },


        {
            id:"REV-001482",
            customer:"Vikram Rao",
            email:"vikram.rao@example.com",
            avatar:"VR",

            product:"Notebook Set",
            sku:"OZZO-S001",
            category:"Stationery",

            image:"../books set.jpg",

            rating:4,

            title:"Great for office",

            message:
                "Good quality notebooks with clean pages. Useful for everyday office work.",

            verified:true,

            status:"Pending",

            date:"13 Sep 2026",

            order:"#OZZO-45741",

            helpful:7,

            reported:false
        },


        {
            id:"REV-001481",
            customer:"Ananya Nair",
            email:"ananya.nair@example.com",
            avatar:"AN",

            product:"Ultra Thin Day Pads",
            sku:"OZZO-P001",
            category:"Pads & Personal Care",

            image:"../pads.jpg",

            rating:5,

            title:"Very comfortable",

            message:
                "Very comfortable and soft. The packaging was also neat and secure.",

            verified:true,

            status:"Published",

            date:"13 Sep 2026",

            order:"#OZZO-45716",

            helpful:19,

            reported:false
        },


        {
            id:"REV-001480",
            customer:"Karan Singh",
            email:"karan.singh@example.com",
            avatar:"KS",

            product:"The Alchemist",
            sku:"OZZO-B002",
            category:"Books",

            image:"../book.jpg",

            rating:3,

            title:"Decent book",

            message:
                "The book arrived in good condition. The story was okay but not exactly what I expected.",

            verified:true,

            status:"Hidden",

            date:"12 Sep 2026",

            order:"#OZZO-45683",

            helpful:4,

            reported:false
        },


        {
            id:"REV-001479",
            customer:"Meera Kapoor",
            email:"meera.kapoor@example.com",
            avatar:"MK",

            product:"Gel Pen Set",
            sku:"OZZO-S002",
            category:"Stationery",

            image:"../pens.jpg",

            rating:2,

            title:"Pens stopped working",

            message:
                "Two pens stopped working after a short time. Please improve the quality control.",

            verified:true,

            status:"Reported",

            date:"12 Sep 2026",

            order:"#OZZO-45649",

            helpful:9,

            reported:true
        },


        {
            id:"REV-001478",
            customer:"Arjun Patel",
            email:"arjun.patel@example.com",
            avatar:"AP",

            product:"Premium Polo T-Shirt",
            sku:"OZZO-F004",
            category:"Fashion",

            image:"../hoddie.jpg",

            rating:5,

            title:"Perfect fit",

            message:
                "Exactly what I expected. Perfect size and comfortable fabric.",

            verified:true,

            status:"Published",

            date:"11 Sep 2026",

            order:"#OZZO-45588",

            helpful:11,

            reported:false
        },


        {
            id:"REV-001477",
            customer:"Ishita Joshi",
            email:"ishita.joshi@example.com",
            avatar:"IJ",

            product:"Think Like a Monk",
            sku:"OZZO-B003",
            category:"Books",

            image:"../book.jpg",

            rating:5,

            title:"Very insightful",

            message:
                "A simple and thoughtful book. The writing style is easy to understand.",

            verified:true,

            status:"Published",

            date:"10 Sep 2026",

            order:"#OZZO-45531",

            helpful:16,

            reported:false
        },


        {
            id:"REV-001476",
            customer:"Rohan Desai",
            email:"rohan.desai@example.com",
            avatar:"RD",

            product:"Classic Green Saree",
            sku:"OZZO-F008",
            category:"Fashion",

            image:"../saree2.jpg",

            rating:4,

            title:"Lovely colour",

            message:
                "The green shade is beautiful and the saree looks elegant when worn.",

            verified:true,

            status:"Pending",

            date:"10 Sep 2026",

            order:"#OZZO-45498",

            helpful:5,

            reported:false
        },


        {
            id:"REV-001475",
            customer:"Divya Rao",
            email:"divya.rao@example.com",
            avatar:"DR",

            product:"Ultra Soft Comfort Pads",
            sku:"OZZO-P002",
            category:"Pads & Personal Care",

            image:"../pads.jpg",

            rating:5,

            title:"Soft and reliable",

            message:
                "Very soft and comfortable throughout the day. Good packaging too.",

            verified:true,

            status:"Published",

            date:"09 Sep 2026",

            order:"#OZZO-45454",

            helpful:21,

            reported:false
        },


        {
            id:"REV-001474",
            customer:"Nikhil Kumar",
            email:"nikhil.kumar@example.com",
            avatar:"NK",

            product:"Notebook Set",
            sku:"OZZO-S001",
            category:"Stationery",

            image:"../books set.jpg",

            rating:4,

            title:"Good quality",

            message:
                "Pages are smooth and the covers are durable. Nice stationery set.",

            verified:true,

            status:"Published",

            date:"09 Sep 2026",

            order:"#OZZO-45420",

            helpful:6,

            reported:false
        },


        {
            id:"REV-001473",
            customer:"Pooja Shah",
            email:"pooja.shah@example.com",
            avatar:"PS",

            product:"Classic Beige Dress",
            sku:"OZZO-F001",
            category:"Fashion",

            image:"../women shirt.jpg",

            rating:5,

            title:"Beautiful dress",

            message:
                "The material looks premium and the stitching is neat. Very happy with the purchase.",

            verified:true,

            status:"Published",

            date:"08 Sep 2026",

            order:"#OZZO-45389",

            helpful:18,

            reported:false
        },


        {
            id:"REV-001472",
            customer:"Sameer Khan",
            email:"sameer.khan@example.com",
            avatar:"SK",

            product:"Atomic Habits",
            sku:"OZZO-B001",
            category:"Books",

            image:"../book.jpg",

            rating:1,

            title:"Damaged on arrival",

            message:
                "The product arrived with a damaged cover. Please improve shipping protection.",

            verified:true,

            status:"Reported",

            date:"08 Sep 2026",

            order:"#OZZO-45350",

            helpful:12,

            reported:true
        },


        {
            id:"REV-001471",
            customer:"Kavya Menon",
            email:"kavya.menon@example.com",
            avatar:"KM",

            product:"Elegant Rose Silk Saree",
            sku:"OZZO-F007",
            category:"Fashion",

            image:"../saree2.jpg",

            rating:5,

            title:"Worth the price",

            message:
                "The saree exceeded my expectations. Looks elegant and feels premium.",

            verified:true,

            status:"Published",

            date:"07 Sep 2026",

            order:"#OZZO-45297",

            helpful:27,

            reported:false
        },


        {
            id:"REV-001470",
            customer:"Manoj Reddy",
            email:"manoj.reddy@example.com",
            avatar:"MR",

            product:"Classic Casual Shirt",
            sku:"OZZO-F002",
            category:"Fashion",

            image:"../hoddie.jpg",

            rating:4,

            title:"Comfortable shirt",

            message:
                "Comfortable and easy to style. The delivery was also quick.",

            verified:true,

            status:"Published",

            date:"07 Sep 2026",

            order:"#OZZO-45264",

            helpful:10,

            reported:false
        }

    ];


    /* =====================================================
       PAGINATION
    ====================================================== */

    let currentPage = 1;

    const rowsPerPage = 8;

    let selectedReviewIds = new Set();

    let activeReviewId = null;


    /* =====================================================
       MODAL
    ====================================================== */

    const reviewModalElement =
        document.getElementById("reviewModal");

    const reviewModal =
        new bootstrap.Modal(
            reviewModalElement
        );


    /* =====================================================
       UTILITY
    ====================================================== */

    function getStars(rating){

        let stars = "";

        for(
            let index = 1;
            index <= 5;
            index++
        ){

            stars +=
                index <= rating
                    ? "★"
                    : "☆";
        }

        return stars;
    }


    function getStatusClass(status){

        return status
            .toLowerCase()
            .replace(/\s+/g,"-");
    }


    /* =====================================================
       FILTER
    ====================================================== */

    function getFilteredReviews(){

        const query =
            reviewSearch.value
                .trim()
                .toLowerCase();

        const status =
            statusFilter.value;

        const rating =
            ratingFilter.value;

        const purchase =
            purchaseFilter.value;


        return reviews.filter(function(review){

            const searchable =
                (
                    review.id +
                    " " +
                    review.customer +
                    " " +
                    review.product +
                    " " +
                    review.title +
                    " " +
                    review.message +
                    " " +
                    review.category
                ).toLowerCase();


            const searchMatch =
                !query ||
                searchable.includes(query);


            const statusMatch =
                status === "all" ||
                review.status === status;


            const ratingMatch =
                rating === "all" ||
                review.rating === Number(rating);


            const purchaseMatch =
                purchase === "all" ||
                (
                    purchase === "verified" &&
                    review.verified
                ) ||
                (
                    purchase === "unverified" &&
                    !review.verified
                );


            return (
                searchMatch &&
                statusMatch &&
                ratingMatch &&
                purchaseMatch
            );

        });

    }


    /* =====================================================
       RENDER TABLE
    ====================================================== */

    function renderReviews(){

        const filtered =
            getFilteredReviews();


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
                currentPage -
                1
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
            ).style.display = "none";


            showingText.textContent =
                "No reviews found";


        }else{

            emptyState.classList.add(
                "d-none"
            );

            document.querySelector(
                ".admin-table-wrapper"
            ).style.display = "";


            pageData.forEach(
                function(review){

                    const row =
                        document.createElement("tr");


                    row.dataset.id =
                        review.id;


                    row.innerHTML = `

                        <td
                            class="review-check-column"
                        >

                            <input
                                type="checkbox"
                                class="review-checkbox"
                                data-id="${review.id}"
                                ${
                                    selectedReviewIds.has(
                                        review.id
                                    )
                                        ? "checked"
                                        : ""
                                }
                            >

                        </td>


                        <td>

                            <div
                                class="review-message-cell"
                            >

                                <strong
                                    class="review-title"
                                >
                                    ${review.title}
                                </strong>


                                <span
                                    class="review-text"
                                    title="${review.message}"
                                >
                                    ${review.message}
                                </span>


                                <span
                                    class="review-helpful"
                                >

                                    <i
                                        class="fa-regular fa-thumbs-up"
                                    ></i>

                                    ${review.helpful}
                                    found helpful

                                </span>

                            </div>

                        </td>


                        <td>

                            <div
                                class="review-customer"
                            >

                                <div
                                    class="review-avatar"
                                >
                                    ${review.avatar}
                                </div>


                                <div
                                    class="review-customer-info"
                                >

                                    <strong>
                                        ${review.customer}
                                    </strong>

                                    <small>
                                        ${review.id}
                                    </small>

                                </div>

                            </div>

                        </td>


                        <td>

                            <div
                                class="review-product"
                            >

                                <div
                                    class="review-product-image"
                                >

                                    <img
                                        src="${review.image}"
                                        alt="${review.product}"
                                        onerror="
                                            this.style.display='none';
                                        "
                                    >

                                </div>


                                <div
                                    class="review-product-info"
                                >

                                    <strong
                                        title="${review.product}"
                                    >
                                        ${review.product}
                                    </strong>

                                    <small>
                                        ${review.sku}
                                    </small>

                                </div>

                            </div>

                        </td>


                        <td>

                            <div
                                class="review-rating-cell"
                            >

                                <span
                                    class="review-stars"
                                >
                                    ${getStars(review.rating)}
                                </span>

                                <span
                                    class="review-rating-number"
                                >
                                    ${review.rating}.0 / 5
                                </span>

                            </div>

                        </td>


                        <td>

                            <span
                                class="
                                    review-purchase
                                    ${
                                        review.verified
                                            ? ""
                                            : "unverified"
                                    }
                                "
                            >

                                <i
                                    class="
                                        fa-solid
                                        ${
                                            review.verified
                                                ? "fa-circle-check"
                                                : "fa-circle-minus"
                                        }
                                    "
                                ></i>

                                ${
                                    review.verified
                                        ? "Verified"
                                        : "Unverified"
                                }

                            </span>

                        </td>


                        <td>

                            <span
                                class="
                                    review-status
                                    ${getStatusClass(review.status)}
                                "
                            >
                                ${review.status}
                            </span>

                        </td>


                        <td>

                            <span
                                class="review-date"
                            >
                                ${review.date}
                            </span>

                        </td>


                        <td>

                            <div
                                class="review-actions"
                            >

                                <button
                                    class="review-action"
                                    type="button"
                                    data-action="view"
                                    data-id="${review.id}"
                                    title="View review"
                                >

                                    <i
                                        class="fa-regular fa-eye"
                                    ></i>

                                </button>


                                <button
                                    class="review-action"
                                    type="button"
                                    data-action="${
                                        review.status === "Published"
                                            ? "hide"
                                            : "publish"
                                    }"
                                    data-id="${review.id}"
                                    title="${
                                        review.status === "Published"
                                            ? "Hide review"
                                            : "Publish review"
                                    }"
                                >

                                    <i
                                        class="
                                            fa-solid
                                            ${
                                                review.status === "Published"
                                                    ? "fa-eye-slash"
                                                    : "fa-check"
                                            }
                                        "
                                    ></i>

                                </button>


                                <button
                                    class="review-action delete"
                                    type="button"
                                    data-action="delete"
                                    data-id="${review.id}"
                                    title="Delete review"
                                >

                                    <i
                                        class="fa-solid fa-trash"
                                    ></i>

                                </button>

                            </div>

                        </td>

                    `;


                    tableBody.appendChild(row);

                }
            );


            showingText.textContent =
                `Showing ${
                    start + 1
                }–${
                    end
                } of ${
                    filtered.length
                } reviews`;
        }


        renderPagination(
            totalPages
        );


        updateSelectionState();

    }


    /* =====================================================
       PAGINATION
    ====================================================== */

    function renderPagination(
        totalPages
    ){

        pageContainer.innerHTML = "";


        for(
            let page = 1;
            page <= totalPages;
            page++
        ){

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "review-page-number";


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

                    renderReviews();

                }
            );


            pageContainer.appendChild(
                button
            );

        }


        prevButton.disabled =
            currentPage === 1;


        nextButton.disabled =
            currentPage === totalPages;

    }


    prevButton.addEventListener(
        "click",
        function(){

            if(
                currentPage > 1
            ){

                currentPage--;

                renderReviews();

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
                        getFilteredReviews()
                            .length /
                        rowsPerPage
                    )
                );


            if(
                currentPage <
                totalPages
            ){

                currentPage++;

                renderReviews();

            }

        }
    );


    /* =====================================================
       SELECTION
    ====================================================== */

    function updateSelectionState(){

        const checkboxes =
            document.querySelectorAll(
                ".review-checkbox"
            );


        checkboxes.forEach(
            function(checkbox){

                const id =
                    checkbox.dataset.id;


                checkbox.checked =
                    selectedReviewIds.has(
                        id
                    );

            }
        );


        selectedCount.textContent =
            selectedReviewIds.size;


        bulkBar.classList.toggle(
            "show",
            selectedReviewIds.size > 0
        );


        if(
            checkboxes.length > 0
        ){

            selectAll.checked =
                Array.from(
                    checkboxes
                ).every(
                    checkbox =>
                        checkbox.checked
                );

        }else{

            selectAll.checked =
                false;
        }

    }


    selectAll.addEventListener(
        "change",
        function(){

            const checkboxes =
                document.querySelectorAll(
                    ".review-checkbox"
                );


            checkboxes.forEach(
                function(checkbox){

                    if(
                        selectAll.checked
                    ){

                        selectedReviewIds.add(
                            checkbox.dataset.id
                        );

                    }else{

                        selectedReviewIds.delete(
                            checkbox.dataset.id
                        );

                    }

                }
            );


            updateSelectionState();

        }
    );


    tableBody.addEventListener(
        "change",
        function(event){

            if(
                !event.target.classList.contains(
                    "review-checkbox"
                )
            ){

                return;
            }


            const id =
                event.target.dataset.id;


            if(
                event.target.checked
            ){

                selectedReviewIds.add(
                    id
                );

            }else{

                selectedReviewIds.delete(
                    id
                );

            }


            updateSelectionState();

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

                openReview(
                    id
                );

            }


            else if(
                action === "publish"
            ){

                changeStatus(
                    id,
                    "Published"
                );

            }


            else if(
                action === "hide"
            ){

                changeStatus(
                    id,
                    "Hidden"
                );

            }


            else if(
                action === "delete"
            ){

                deleteReview(
                    id
                );

            }

        }
    );


    /* =====================================================
       CHANGE STATUS
    ====================================================== */

    function changeStatus(
        id,
        status
    ){

        const review =
            reviews.find(
                item =>
                    item.id === id
            );


        if(!review){
            return;
        }


        review.status =
            status;


        showToast(
            `${
                status === "Published"
                    ? "Review published"
                    : "Review hidden"
            }`
        );


        renderReviews();

    }


    /* =====================================================
       DELETE
    ====================================================== */

    function deleteReview(
        id
    ){

        const review =
            reviews.find(
                item =>
                    item.id === id
            );


        if(!review){
            return;
        }


        const confirmed =
            window.confirm(
                `Delete ${review.id}?`
            );


        if(!confirmed){
            return;
        }


        reviews =
            reviews.filter(
                item =>
                    item.id !== id
            );


        selectedReviewIds.delete(
            id
        );


        showToast(
            "Review deleted successfully"
        );


        renderReviews();

    }


    /* =====================================================
       BULK PUBLISH
    ====================================================== */

    document
        .getElementById("bulkPublish")
        .addEventListener(
            "click",
            function(){

                if(
                    selectedReviewIds.size === 0
                ){
                    return;
                }


                reviews.forEach(
                    function(review){

                        if(
                            selectedReviewIds.has(
                                review.id
                            )
                        ){

                            review.status =
                                "Published";

                        }

                    }
                );


                const count =
                    selectedReviewIds.size;


                selectedReviewIds.clear();


                showToast(
                    `${count} review(s) published`
                );


                renderReviews();

            }
        );


    /* =====================================================
       BULK HIDE
    ====================================================== */

    document
        .getElementById("bulkHide")
        .addEventListener(
            "click",
            function(){

                if(
                    selectedReviewIds.size === 0
                ){
                    return;
                }


                reviews.forEach(
                    function(review){

                        if(
                            selectedReviewIds.has(
                                review.id
                            )
                        ){

                            review.status =
                                "Hidden";

                        }

                    }
                );


                const count =
                    selectedReviewIds.size;


                selectedReviewIds.clear();


                showToast(
                    `${count} review(s) hidden`
                );


                renderReviews();

            }
        );


    /* =====================================================
       BULK DELETE
    ====================================================== */

    document
        .getElementById("bulkDelete")
        .addEventListener(
            "click",
            function(){

                if(
                    selectedReviewIds.size === 0
                ){
                    return;
                }


                const count =
                    selectedReviewIds.size;


                const confirmed =
                    window.confirm(
                        `Delete ${count} selected review(s)?`
                    );


                if(!confirmed){
                    return;
                }


                reviews =
                    reviews.filter(
                        review =>
                            !selectedReviewIds.has(
                                review.id
                            )
                    );


                selectedReviewIds.clear();


                showToast(
                    `${count} review(s) deleted`
                );


                renderReviews();

            }
        );


    /* =====================================================
       FILTER EVENTS
    ====================================================== */

    [
        reviewSearch,
        statusFilter,
        ratingFilter,
        purchaseFilter
    ]
        .forEach(
            function(element){

                element.addEventListener(
                    "input",
                    function(){

                        currentPage = 1;

                        renderReviews();

                    }
                );


                element.addEventListener(
                    "change",
                    function(){

                        currentPage = 1;

                        renderReviews();

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

            reviewSearch.value =
                globalSearch.value;

            currentPage = 1;

            renderReviews();

        }
    );


    /* =====================================================
       VIEW REVIEW
    ====================================================== */

    function openReview(
        id
    ){

        const review =
            reviews.find(
                item =>
                    item.id === id
            );


        if(!review){
            return;
        }


        activeReviewId =
            id;


        document.getElementById(
            "modalAvatar"
        ).textContent =
            review.avatar;


        document.getElementById(
            "modalCustomer"
        ).textContent =
            review.customer;


        document.getElementById(
            "modalEmail"
        ).textContent =
            review.email;


        const statusElement =
            document.getElementById(
                "modalStatus"
            );


        statusElement.textContent =
            review.status;


        if(
            review.status === "Pending"
        ){

            statusElement.style.background =
                "#f7ecd8";

            statusElement.style.color =
                "#8d661e";

        }

        else if(
            review.status === "Reported"
        ){

            statusElement.style.background =
                "#f7e1df";

            statusElement.style.color =
                "var(--danger)";

        }

        else if(
            review.status === "Hidden"
        ){

            statusElement.style.background =
                "#eef1f4";

            statusElement.style.color =
                "#788695";

        }

        else{

            statusElement.style.background =
                "var(--green)";

            statusElement.style.color =
                "#315b4f";
        }


        const productImage =
            document.getElementById(
                "modalProductImage"
            );


        productImage.innerHTML = `
            <img
                src="${review.image}"
                alt="${review.product}"
                onerror="
                    this.style.display='none';
                    this.parentElement.innerHTML='<i class=&quot;fa-solid fa-box&quot;></i>';
                "
            >
        `;


        document.getElementById(
            "modalProduct"
        ).textContent =
            review.product;


        document.getElementById(
            "modalOrder"
        ).textContent =
            `Order ${review.order}`;


        document.getElementById(
            "modalStars"
        ).textContent =
            getStars(
                review.rating
            );


        document.getElementById(
            "modalRating"
        ).textContent =
            `${review.rating} / 5`;


        const verifiedElement =
            document.getElementById(
                "modalVerified"
            );


        verifiedElement.style.display =
            review.verified
                ? "inline-block"
                : "none";


        document.getElementById(
            "modalTitle"
        ).textContent =
            review.title;


        document.getElementById(
            "modalMessage"
        ).textContent =
            review.message;


        document.getElementById(
            "modalId"
        ).textContent =
            review.id;


        document.getElementById(
            "modalDate"
        ).textContent =
            review.date;


        document.getElementById(
            "modalHelpful"
        ).textContent =
            review.helpful;


        document.getElementById(
            "modalReported"
        ).textContent =
            review.reported
                ? "Yes"
                : "No";


        document.getElementById(
            "reviewReply"
        ).value = "";


        reviewModal.show();

    }


    /* =====================================================
       SAVE REPLY
    ====================================================== */

    document
        .getElementById("saveReply")
        .addEventListener(
            "click",
            function(){

                const reply =
                    document
                        .getElementById(
                            "reviewReply"
                        )
                        .value
                        .trim();


                if(
                    !activeReviewId
                ){

                    showToast(
                        "Select a review first"
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


                reviewModal.hide();


                showToast(
                    "Review reply saved successfully"
                );

            }
        );


    /* =====================================================
       EXPORT CSV
    ====================================================== */

    function exportReviews(){

        const filtered =
            getFilteredReviews();


        if(
            filtered.length === 0
        ){

            showToast(
                "No reviews available to export"
            );

            return;
        }


        const headers = [

            "Review ID",
            "Customer",
            "Email",
            "Product",
            "SKU",
            "Category",
            "Rating",
            "Title",
            "Review",
            "Verified Purchase",
            "Status",
            "Date",
            "Order",
            "Helpful Votes",
            "Reported"

        ];


        const lines = [

            headers.join(",")

        ];


        filtered.forEach(
            function(review){

                const row = [

                    review.id,
                    review.customer,
                    review.email,
                    review.product,
                    review.sku,
                    review.category,
                    review.rating,
                    review.title,
                    review.message,
                    review.verified
                        ? "Yes"
                        : "No",
                    review.status,
                    review.date,
                    review.order,
                    review.helpful,
                    review.reported
                        ? "Yes"
                        : "No"

                ];


                lines.push(
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
            "ozzo-reviews.csv";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );


        showToast(
            `${filtered.length} review(s) exported`
        );

    }


    document
        .getElementById("exportReviews")
        .addEventListener(
            "click",
            exportReviews
        );


    /* =====================================================
       REFRESH
    ====================================================== */

    document
        .getElementById("refreshReviews")
        .addEventListener(
            "click",
            function(){

                renderReviews();

                showToast(
                    "Reviews refreshed successfully"
                );

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


            const clickedDesktopNotification =
                notificationBtn.contains(
                    event.target
                );


            const clickedMobileNotification =
                mobileNotificationBtn.contains(
                    event.target
                );


            if(
                !clickedInsidePanel &&
                !clickedDesktopNotification &&
                !clickedMobileNotification
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
       NAV MOBILE CLOSE
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
       CURRENT DATE
    ====================================================== */

    const currentDate =
        document.getElementById(
            "currentDate"
        );


    const now =
        new Date();


    currentDate.textContent =
        now.toLocaleDateString(
            "en-IN",
            {
                month:"long",
                year:"numeric"
            }
        );


    /* =====================================================
       INITIAL RENDER
    ====================================================== */

    renderReviews();

});