/* =========================================================
   OZZO ADMIN SETTINGS JS
========================================================= */

document.addEventListener("DOMContentLoaded", function(){


    /* =====================================================
       STORAGE
    ====================================================== */

    const STORAGE_KEY =
        "ozzoAdminSettings";


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

    const logoutBtn =
        document.getElementById("logoutBtn");

    const adminSearch =
        document.getElementById("adminSearch");

    const currentDate =
        document.getElementById("currentDate");

    const saveSettings =
        document.getElementById("saveSettings");

    const resetSettings =
        document.getElementById("resetSettings");

    const adminToast =
        document.getElementById("adminToast");


    /* =====================================================
       DEFAULT SETTINGS
    ====================================================== */

    const defaults = {

        storeName:
            "OZZO",

        supportEmail:
            "support@ozzo.com",

        supportPhone:
            "+91 98765 43210",

        currency:
            "Indian Rupee (₹)",

        timezone:
            "Asia/Kolkata",

        freeShipping:
            "999",

        storefrontEnabled:
            true,

        maintenanceMode:
            false,

        autoConfirmOrders:
            true,

        orderConfirmationEmail:
            true,

        automaticInvoice:
            true,

        lowStockAlerts:
            true,

        cancelWindow:
            "30 Minutes",

        stockThreshold:
            "5",

        newOrderAlerts:
            true,

        paymentAlerts:
            true,

        returnAlerts:
            true,

        staffAlerts:
            true,

        systemAlerts:
            true,

        twoFactor:
            true,

        loginAlerts:
            true,

        sessionProtection:
            true,

        sessionTimeout:
            "30 Minutes",

        passwordExpiry:
            "90 Days"

    };


    /* =====================================================
       FIELDS
    ====================================================== */

    const fields = {

        storeName:
            document.getElementById("storeName"),

        supportEmail:
            document.getElementById("supportEmail"),

        supportPhone:
            document.getElementById("supportPhone"),

        currency:
            document.getElementById("currency"),

        timezone:
            document.getElementById("timezone"),

        freeShipping:
            document.getElementById("freeShipping"),

        storefrontEnabled:
            document.getElementById("storefrontEnabled"),

        maintenanceMode:
            document.getElementById("maintenanceMode"),

        autoConfirmOrders:
            document.getElementById("autoConfirmOrders"),

        orderConfirmationEmail:
            document.getElementById("orderConfirmationEmail"),

        automaticInvoice:
            document.getElementById("automaticInvoice"),

        lowStockAlerts:
            document.getElementById("lowStockAlerts"),

        cancelWindow:
            document.getElementById("cancelWindow"),

        stockThreshold:
            document.getElementById("stockThreshold"),

        newOrderAlerts:
            document.getElementById("newOrderAlerts"),

        paymentAlerts:
            document.getElementById("paymentAlerts"),

        returnAlerts:
            document.getElementById("returnAlerts"),

        staffAlerts:
            document.getElementById("staffAlerts"),

        systemAlerts:
            document.getElementById("systemAlerts"),

        twoFactor:
            document.getElementById("twoFactor"),

        loginAlerts:
            document.getElementById("loginAlerts"),

        sessionProtection:
            document.getElementById("sessionProtection"),

        sessionTimeout:
            document.getElementById("sessionTimeout"),

        passwordExpiry:
            document.getElementById("passwordExpiry")

    };


    /* =====================================================
       TOAST
    ====================================================== */

    function showToast(message){

        if(!adminToast){
            return;
        }

        adminToast.textContent =
            message;

        adminToast.classList.add(
            "show"
        );

        clearTimeout(
            window.ozzoSettingsToast
        );

        window.ozzoSettingsToast =
            setTimeout(function(){

                adminToast.classList.remove(
                    "show"
                );

            },2200);

    }


    /* =====================================================
       SIDEBAR
    ====================================================== */

    function openSidebar(){

        sidebar?.classList.add(
            "show"
        );

        overlay?.classList.add(
            "show"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closeSidebar(){

        sidebar?.classList.remove(
            "show"
        );

        overlay?.classList.remove(
            "show"
        );

        document.body.style.overflow =
            "";

    }


    mobileMenuBtn?.addEventListener(
        "click",
        openSidebar
    );


    overlay?.addEventListener(
        "click",
        closeSidebar
    );


    document
        .querySelectorAll(".admin-nav-link")
        .forEach(function(link){

            link.addEventListener(
                "click",
                function(){

                    if(window.innerWidth <= 991){

                        closeSidebar();

                    }

                }
            );

        });


    /* =====================================================
       NOTIFICATIONS
    ====================================================== */

    function toggleNotifications(){

        notificationPanel?.classList.toggle(
            "show"
        );

    }


    notificationBtn?.addEventListener(
        "click",
        function(event){

            event.stopPropagation();

            toggleNotifications();

        }
    );


    mobileNotificationBtn?.addEventListener(
        "click",
        function(event){

            event.stopPropagation();

            toggleNotifications();

        }
    );


    closeNotifications?.addEventListener(
        "click",
        function(){

            notificationPanel?.classList.remove(
                "show"
            );

        }
    );


    document.addEventListener(
        "click",
        function(event){

            if(
                notificationPanel &&
                !notificationPanel.contains(
                    event.target
                ) &&
                event.target !== notificationBtn &&
                event.target !== mobileNotificationBtn
            ){

                notificationPanel.classList.remove(
                    "show"
                );

            }

        }
    );


    /* =====================================================
       SETTINGS TABS
    ====================================================== */

    const settingsTabs =
        document.querySelectorAll(
            ".settings-nav-item"
        );

    const settingsSections =
        document.querySelectorAll(
            ".settings-section"
        );


    function openSettingsTab(targetId){

        settingsTabs.forEach(
            function(tab){

                tab.classList.toggle(
                    "active",
                    tab.dataset.target === targetId
                );

            }
        );


        settingsSections.forEach(
            function(section){

                section.classList.toggle(
                    "active",
                    section.id === targetId
                );

            }
        );

    }


    settingsTabs.forEach(
        function(tab){

            tab.addEventListener(
                "click",
                function(){

                    const target =
                        tab.dataset.target;

                    openSettingsTab(
                        target
                    );

                }
            );

        }
    );


    /* =====================================================
       LOAD SETTINGS
    ====================================================== */

    function loadSettings(){

        let saved = {};


        try{

            const stored =
                localStorage.getItem(
                    STORAGE_KEY
                );

            if(stored){

                saved =
                    JSON.parse(stored);

            }

        }catch(error){

            console.error(
                "Unable to load settings:",
                error
            );

        }


        const settings = {

            ...defaults,

            ...saved

        };


        Object.keys(fields)
            .forEach(function(key){

                const field =
                    fields[key];

                if(!field){
                    return;
                }


                if(field.type === "checkbox"){

                    field.checked =
                        Boolean(
                            settings[key]
                        );

                }else{

                    field.value =
                        settings[key];

                }

            });

    }


    /* =====================================================
       COLLECT SETTINGS
    ====================================================== */

    function collectSettings(){

        const settings = {};


        Object.keys(fields)
            .forEach(function(key){

                const field =
                    fields[key];

                if(!field){
                    return;
                }


                if(field.type === "checkbox"){

                    settings[key] =
                        field.checked;

                }else{

                    settings[key] =
                        field.value;

                }

            });


        return settings;

    }


    /* =====================================================
       SAVE
    ====================================================== */

    saveSettings?.addEventListener(
        "click",
        function(){

            try{

                const settings =
                    collectSettings();


                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(
                        settings
                    )
                );


                showToast(
                    "Settings saved successfully."
                );

            }catch(error){

                console.error(
                    "Unable to save settings:",
                    error
                );

                showToast(
                    "Unable to save settings."
                );

            }

        }
    );


    /* =====================================================
       RESET
    ====================================================== */

    resetSettings?.addEventListener(
        "click",
        function(){

            const confirmed =
                window.confirm(
                    "Reset all settings to their default values?"
                );


            if(!confirmed){
                return;
            }


            try{

                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(
                        defaults
                    )
                );


                loadSettings();


                showToast(
                    "Settings restored to defaults."
                );

            }catch(error){

                console.error(
                    "Unable to reset settings:",
                    error
                );

            }

        }
    );


    /* =====================================================
       MAINTENANCE MODE
    ====================================================== */

    fields.maintenanceMode?.addEventListener(
        "change",
        function(){

            if(this.checked){

                showToast(
                    "Maintenance mode enabled."
                );

            }else{

                showToast(
                    "Maintenance mode disabled."
                );

            }

        }
    );


    /* =====================================================
       SEARCH
    ====================================================== */

    adminSearch?.addEventListener(
        "input",
        function(){

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            if(!query){
                return;
            }


            const content =
                document.body.innerText
                    .toLowerCase();


            if(
                content.includes(query)
            ){

                showToast(
                    "Matching Settings content found."
                );

            }else{

                showToast(
                    "No matching content found."
                );

            }

        }
    );


    /* =====================================================
       LOGOUT
    ====================================================== */

    logoutBtn?.addEventListener(
        "click",
        function(){

            const confirmed =
                window.confirm(
                    "Are you sure you want to logout?"
                );


            if(!confirmed){
                return;
            }


            showToast(
                "Logout action triggered."
            );

        }
    );


    /* =====================================================
       DATE
    ====================================================== */

    function updateDate(){

        const now =
            new Date();


        const formatted =
            now.toLocaleDateString(
                "en-IN",
                {
                    month:"long",
                    year:"numeric"
                }
            );


        if(currentDate){

            currentDate.textContent =
                formatted;

        }

    }


    /* =====================================================
       INITIALIZE
    ====================================================== */

    loadSettings();

    updateDate();

});