/* =========================================================
   OZZO COUPONS
   STANDALONE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       DATA
    ===================================================== */

    let coupons = [
        {
            id: 1,
            code: "OZZO10",
            campaign: "Storewide Offer",
            type: "Percentage",
            value: "10%",
            usage: 428,
            limit: 1000,
            minOrder: 999,
            expiry: "2026-09-30",
            status: "Active"
        },
        {
            id: 2,
            code: "WELCOME20",
            campaign: "First Order",
            type: "Percentage",
            value: "20%",
            usage: 362,
            limit: 500,
            minOrder: 799,
            expiry: "2026-10-05",
            status: "Active"
        },
        {
            id: 3,
            code: "BOOKS150",
            campaign: "Books Special",
            type: "Flat",
            value: "₹150",
            usage: 298,
            limit: 500,
            minOrder: 999,
            expiry: "2026-09-25",
            status: "Active"
        },
        {
            id: 4,
            code: "PADCARE",
            campaign: "Personal Care",
            type: "Percentage",
            value: "15%",
            usage: 236,
            limit: 400,
            minOrder: 699,
            expiry: "2026-10-15",
            status: "Active"
        },
        {
            id: 5,
            code: "FASHION25",
            campaign: "Fashion Week",
            type: "Percentage",
            value: "25%",
            usage: 184,
            limit: 300,
            minOrder: 1499,
            expiry: "2026-09-22",
            status: "Scheduled"
        },
        {
            id: 6,
            code: "OZZO150",
            campaign: "Flat Savings",
            type: "Flat",
            value: "₹150",
            usage: 152,
            limit: 350,
            minOrder: 1199,
            expiry: "2026-10-10",
            status: "Paused"
        },
        {
            id: 7,
            code: "SHIPFREE",
            campaign: "Free Delivery",
            type: "Free Shipping",
            value: "Free",
            usage: 96,
            limit: 250,
            minOrder: 799,
            expiry: "2026-09-20",
            status: "Expired"
        },
        {
            id: 8,
            code: "BOOK10",
            campaign: "Book Lovers",
            type: "Percentage",
            value: "10%",
            usage: 74,
            limit: 200,
            minOrder: 699,
            expiry: "2026-10-20",
            status: "Active"
        }
    ];


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const couponsBody =
        document.getElementById("couponsBody");

    const couponSearch =
        document.getElementById("couponSearch");

    const couponSearchTop =
        document.getElementById("couponSearchTop");

    const couponStatus =
        document.getElementById("couponStatus");

    const couponType =
        document.getElementById("couponType");

    const couponSort =
        document.getElementById("couponSort");

    const clearCouponFilters =
        document.getElementById("clearCouponFilters");

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

    const addCouponBtn =
        document.getElementById("addCouponBtn");

    const couponForm =
        document.getElementById("couponForm");

    const couponModalEl =
        document.getElementById("couponModal");

    const couponModal =
        new bootstrap.Modal(couponModalEl);

    const couponModalTitle =
        document.getElementById("couponModalTitle");

    const editCouponId =
        document.getElementById("editCouponId");

    const couponCode =
        document.getElementById("couponCode");

    const couponCampaign =
        document.getElementById("couponCampaign");

    const couponTypeInput =
        document.getElementById("couponTypeInput");

    const couponValue =
        document.getElementById("couponValue");

    const couponMinOrder =
        document.getElementById("couponMinOrder");

    const couponUsageLimit =
        document.getElementById("couponUsageLimit");

    const couponExpiry =
        document.getElementById("couponExpiry");

    const couponStatusInput =
        document.getElementById("couponStatusInput");

    const activateSelected =
        document.getElementById("activateSelected");

    const pauseSelected =
        document.getElementById("pauseSelected");

    const deleteSelected =
        document.getElementById("deleteSelected");

    const exportCouponsBtn =
        document.getElementById("exportCouponsBtn");

    const adminToast =
        document.getElementById("adminToast");


    /* =====================================================
       STATE
    ===================================================== */

    let filteredCoupons = [...coupons];

    let page = 1;

    const pageSize = 5;


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        adminToast.textContent = message;

        adminToast.classList.add("show");

        clearTimeout(window.ozzoToastTimer);

        window.ozzoToastTimer =
            setTimeout(() => {
                adminToast.classList.remove("show");
            }, 2200);
    }


    /* =====================================================
       FORMAT
    ===================================================== */

    function formatDate(dateString) {

        if (!dateString) {
            return "-";
        }

        const date =
            new Date(`${dateString}T00:00:00`);

        return date.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );
    }


    function getStatusClass(status) {

        return status
            .toLowerCase()
            .replace(/\s+/g, "-");
    }


    /* =====================================================
       RENDER
    ===================================================== */

    function renderCoupons() {

        const start =
            (page - 1) * pageSize;

        const end =
            start + pageSize;

        const pageItems =
            filteredCoupons.slice(start, end);

        couponsBody.innerHTML = "";

        if (!filteredCoupons.length) {

            document
                .getElementById("emptyState")
                .classList.remove("d-none");

            resultLabel.textContent =
                "0 coupons found";

            footerResult.textContent =
                "Showing 0 of 0 coupons";

            currentPage.textContent = "1";

            prevPage.disabled = true;
            nextPage.disabled = true;

            updateSelectionCount();

            return;
        }

        document
            .getElementById("emptyState")
            .classList.add("d-none");


        pageItems.forEach(coupon => {

            const row =
                document.createElement("tr");

            row.dataset.id = coupon.id;

            row.innerHTML = `
                <td>
                    <input
                        type="checkbox"
                        class="coupon-check"
                        value="${coupon.id}"
                        aria-label="Select ${coupon.code}"
                    >
                </td>

                <td>
                    <span class="coupon-main">
                        ${coupon.code}
                    </span>

                    <span class="coupon-sub">
                        ${coupon.campaign}
                    </span>
                </td>

                <td>
                    <span class="coupon-type">
                        ${coupon.type}
                    </span>
                </td>

                <td>
                    <strong class="coupon-value">
                        ${coupon.value}
                    </strong>
                </td>

                <td>
                    <strong class="usage-number">
                        ${coupon.usage}
                    </strong>

                    <span class="usage-sub">
                        of ${coupon.limit}
                    </span>
                </td>

                <td>
                    ₹${coupon.minOrder.toLocaleString("en-IN")}
                </td>

                <td>
                    ${formatDate(coupon.expiry)}
                </td>

                <td>
                    <span class="coupon-status ${getStatusClass(coupon.status)}">
                        ${coupon.status}
                    </span>
                </td>

                <td>
                    <div class="coupon-action-wrap">

                        <button
                            class="coupon-view-btn"
                            type="button"
                            data-view="${coupon.id}"
                            title="View coupon"
                            aria-label="View ${coupon.code}"
                        >
                            <i class="fa-regular fa-eye"></i>
                        </button>

                        <button
                            class="coupon-edit-btn"
                            type="button"
                            data-edit="${coupon.id}"
                            title="Edit coupon"
                            aria-label="Edit ${coupon.code}"
                        >
                            <i class="fa-solid fa-pen"></i>
                        </button>

                    </div>
                </td>
            `;

            couponsBody.appendChild(row);

        });


        resultLabel.textContent =
            `${filteredCoupons.length} coupon${filteredCoupons.length === 1 ? "" : "s"} found`;


        footerResult.textContent =
            `Showing ${start + 1}–${Math.min(end, filteredCoupons.length)} of ${filteredCoupons.length} coupons`;


        const totalPages =
            Math.max(
                1,
                Math.ceil(filteredCoupons.length / pageSize)
            );

        currentPage.textContent = page;

        prevPage.disabled =
            page <= 1;

        nextPage.disabled =
            page >= totalPages;


        updateSelectionCount();

        selectVisibleCheckboxes();

    }


    /* =====================================================
       FILTER
    ===================================================== */

    function applyFilters() {

        const search =
            couponSearch.value
                .trim()
                .toLowerCase();

        const status =
            couponStatus.value;

        const type =
            couponType.value;

        const sort =
            couponSort.value;


        filteredCoupons =
            coupons.filter(coupon => {

                const matchesSearch =
                    !search ||
                    coupon.code
                        .toLowerCase()
                        .includes(search) ||
                    coupon.campaign
                        .toLowerCase()
                        .includes(search);


                const matchesStatus =
                    status === "all" ||
                    coupon.status === status;


                const matchesType =
                    type === "all" ||
                    coupon.type === type;


                return (
                    matchesSearch &&
                    matchesStatus &&
                    matchesType
                );

            });


        if (sort === "usage") {

            filteredCoupons.sort(
                (a, b) =>
                    b.usage - a.usage
            );

        }

        else if (sort === "discount") {

            filteredCoupons.sort(
                (a, b) =>
                    parseDiscountValue(b.value) -
                    parseDiscountValue(a.value)
            );

        }

        else if (sort === "code") {

            filteredCoupons.sort(
                (a, b) =>
                    a.code.localeCompare(b.code)
            );

        }

        else {

            filteredCoupons.sort(
                (a, b) =>
                    b.id - a.id
            );

        }


        page = 1;

        renderCoupons();

    }


    function parseDiscountValue(value) {

        const number =
            parseFloat(
                String(value)
                    .replace(/[^\d.]/g, "")
            );

        return Number.isNaN(number)
            ? 0
            : number;
    }


    /* =====================================================
       SEARCH SYNC
    ===================================================== */

    couponSearch.addEventListener(
        "input",
        () => {

            couponSearchTop.value =
                couponSearch.value;

            applyFilters();

        }
    );


    couponSearchTop.addEventListener(
        "input",
        () => {

            couponSearch.value =
                couponSearchTop.value;

            applyFilters();

        }
    );


    couponStatus.addEventListener(
        "change",
        applyFilters
    );

    couponType.addEventListener(
        "change",
        applyFilters
    );

    couponSort.addEventListener(
        "change",
        applyFilters
    );


    /* =====================================================
       CLEAR FILTERS
    ===================================================== */

    clearCouponFilters.addEventListener(
        "click",
        () => {

            couponSearch.value = "";
            couponSearchTop.value = "";

            couponStatus.value = "all";
            couponType.value = "all";
            couponSort.value = "latest";

            applyFilters();

            showToast("Filters cleared");

        }
    );


    /* =====================================================
       PAGINATION
    ===================================================== */

    prevPage.addEventListener(
        "click",
        () => {

            if (page > 1) {

                page--;

                renderCoupons();

            }

        }
    );


    nextPage.addEventListener(
        "click",
        () => {

            const totalPages =
                Math.ceil(
                    filteredCoupons.length /
                    pageSize
                );

            if (page < totalPages) {

                page++;

                renderCoupons();

            }

        }
    );


    /* =====================================================
       CHECKBOXES
    ===================================================== */

    function getSelectedIds() {

        return [
            ...document.querySelectorAll(
                ".coupon-check:checked"
            )
        ].map(
            checkbox =>
                Number(checkbox.value)
        );

    }


    function updateSelectionCount() {

        const selected =
            getSelectedIds();

        selectedCount.textContent =
            `${selected.length} selected`;

        selectAll.checked =
            document.querySelectorAll(
                ".coupon-check"
            ).length > 0 &&
            document.querySelectorAll(
                ".coupon-check"
            ).length ===
            document.querySelectorAll(
                ".coupon-check:checked"
            ).length;

    }


    function selectVisibleCheckboxes() {

        document
            .querySelectorAll(".coupon-check")
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
                .querySelectorAll(".coupon-check")
                .forEach(checkbox => {

                    checkbox.checked =
                        selectAll.checked;

                });

            updateSelectionCount();

        }
    );


    /* =====================================================
       BULK ACTIONS
    ===================================================== */

    activateSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();

            if (!ids.length) {
                showToast("Select at least one coupon");
                return;
            }

            coupons.forEach(coupon => {

                if (ids.includes(coupon.id)) {
                    coupon.status = "Active";
                }

            });

            applyFilters();

            showToast(
                `${ids.length} coupon${ids.length > 1 ? "s" : ""} activated`
            );

        }
    );


    pauseSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();

            if (!ids.length) {
                showToast("Select at least one coupon");
                return;
            }

            coupons.forEach(coupon => {

                if (ids.includes(coupon.id)) {
                    coupon.status = "Paused";
                }

            });

            applyFilters();

            showToast(
                `${ids.length} coupon${ids.length > 1 ? "s" : ""} paused`
            );

        }
    );


    deleteSelected.addEventListener(
        "click",
        () => {

            const ids =
                getSelectedIds();

            if (!ids.length) {
                showToast("Select at least one coupon");
                return;
            }

            const confirmed =
                window.confirm(
                    `Delete ${ids.length} selected coupon${ids.length > 1 ? "s" : ""}?`
                );

            if (!confirmed) {
                return;
            }

            coupons =
                coupons.filter(
                    coupon =>
                        !ids.includes(coupon.id)
                );

            applyFilters();

            showToast("Selected coupons deleted");

        }
    );


    /* =====================================================
       EXPORT
    ===================================================== */

    exportCouponsBtn.addEventListener(
        "click",
        () => {

            if (!filteredCoupons.length) {

                showToast("No coupons to export");
                return;

            }


            const headers = [
                "Code",
                "Campaign",
                "Type",
                "Value",
                "Usage",
                "Usage Limit",
                "Minimum Order",
                "Expiry",
                "Status"
            ];


            const rows =
                filteredCoupons.map(coupon => [

                    coupon.code,
                    coupon.campaign,
                    coupon.type,
                    coupon.value,
                    coupon.usage,
                    coupon.limit,
                    coupon.minOrder,
                    coupon.expiry,
                    coupon.status

                ]);


            const csv = [
                headers,
                ...rows
            ]
                .map(
                    row =>
                        row
                            .map(value =>
                                `"${String(value)
                                    .replace(/"/g, '""')}"`
                            )
                            .join(",")
                )
                .join("\n");


            const blob =
                new Blob(
                    [csv],
                    {
                        type:"text/csv;charset=utf-8;"
                    }
                );


            const url =
                URL.createObjectURL(blob);


            const link =
                document.createElement("a");

            link.href = url;

            link.download =
                "ozzo-coupons.csv";

            document.body.appendChild(link);

            link.click();

            link.remove();

            URL.revokeObjectURL(url);

            showToast("Coupon report exported");

        }
    );


    /* =====================================================
       MODAL - ADD
    ===================================================== */

    addCouponBtn.addEventListener(
        "click",
        () => {

            couponForm.reset();

            editCouponId.value = "";

            couponModalTitle.textContent =
                "Create Coupon";

            couponStatusInput.value =
                "Active";

            couponTypeInput.value =
                "Percentage";

            couponModal.show();

        }
    );


    /* =====================================================
       TABLE ACTIONS
    ===================================================== */

    couponsBody.addEventListener(
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


            if (editButton) {

                const id =
                    Number(
                        editButton.dataset.edit
                    );

                openEditCoupon(id);

            }


            if (viewButton) {

                const id =
                    Number(
                        viewButton.dataset.view
                    );

                viewCoupon(id);

            }

        }
    );


    /* =====================================================
       EDIT COUPON
    ===================================================== */

    function openEditCoupon(id) {

        const coupon =
            coupons.find(
                item => item.id === id
            );

        if (!coupon) {
            return;
        }

        editCouponId.value =
            coupon.id;

        couponCode.value =
            coupon.code;

        couponCampaign.value =
            coupon.campaign;

        couponTypeInput.value =
            coupon.type;

        couponValue.value =
            parseDiscountValue(
                coupon.value
            );

        couponMinOrder.value =
            coupon.minOrder;

        couponUsageLimit.value =
            coupon.limit;

        couponExpiry.value =
            coupon.expiry;

        couponStatusInput.value =
            coupon.status === "Expired"
                ? "Paused"
                : coupon.status;

        couponModalTitle.textContent =
            "Edit Coupon";

        couponModal.show();

    }


    /* =====================================================
       VIEW COUPON
    ===================================================== */

    function viewCoupon(id) {

        const coupon =
            coupons.find(
                item => item.id === id
            );

        if (!coupon) {
            return;
        }

        showToast(
            `${coupon.code} • ${coupon.usage} uses`
        );

    }


    /* =====================================================
       SAVE COUPON
    ===================================================== */

    couponForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const id =
                Number(editCouponId.value);


            const code =
                couponCode.value
                    .trim()
                    .toUpperCase();


            const campaign =
                couponCampaign.value.trim();


            const type =
                couponTypeInput.value;


            const rawValue =
                Number(couponValue.value);


            const minOrder =
                Number(couponMinOrder.value);


            const limit =
                Number(couponUsageLimit.value);


            const expiry =
                couponExpiry.value;


            const status =
                couponStatusInput.value;


            if (!code || !campaign) {

                showToast(
                    "Please complete the required fields"
                );

                return;

            }


            if (
                type !== "Free Shipping" &&
                rawValue <= 0
            ) {

                showToast(
                    "Enter a valid discount value"
                );

                return;

            }


            if (limit <= 0) {

                showToast(
                    "Enter a valid usage limit"
                );

                return;

            }


            let displayValue = "";

            if (type === "Percentage") {

                displayValue =
                    `${rawValue}%`;

            }

            else if (type === "Flat") {

                displayValue =
                    `₹${rawValue.toLocaleString("en-IN")}`;

            }

            else {

                displayValue =
                    "Free";

            }


            if (id) {

                const coupon =
                    coupons.find(
                        item => item.id === id
                    );

                if (coupon) {

                    coupon.code =
                        code;

                    coupon.campaign =
                        campaign;

                    coupon.type =
                        type;

                    coupon.value =
                        displayValue;

                    coupon.minOrder =
                        minOrder;

                    coupon.limit =
                        limit;

                    coupon.expiry =
                        expiry;

                    coupon.status =
                        status;

                }

                showToast(
                    `${code} updated successfully`
                );

            }

            else {

                coupons.unshift({

                    id:
                        Date.now(),

                    code,
                    campaign,
                    type,

                    value:
                        displayValue,

                    usage:0,

                    limit,

                    minOrder,

                    expiry,

                    status

                });

                showToast(
                    `${code} created successfully`
                );

            }


            couponModal.hide();

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


    function openSidebar() {

        adminSidebar.classList.add("show");

        sidebarOverlay.classList.add("show");

    }


    function closeSidebar() {

        adminSidebar.classList.remove("show");

        sidebarOverlay.classList.remove("show");

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

                    if (
                        window.innerWidth <= 991
                    ) {

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


    function toggleNotifications() {

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


            if (
                !clickedInside &&
                notificationPanel.classList.contains("show")
            ) {

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

                if (confirmed) {

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