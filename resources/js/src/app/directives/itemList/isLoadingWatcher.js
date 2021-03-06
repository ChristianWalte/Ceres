var ResourceService = require("services/ResourceService");

Vue.directive("is-loading-watcher",
    {
        bind: function()
        {
            var firstRendering = true;

            ResourceService.watch("isLoading", function()
            {
                if (!firstRendering && document.getElementById("twig-rendered-item-list") !== null)
                {
                    $("#twig-rendered-item-list").remove();

                    document.getElementById("vue-rendered-item-list").style.removeProperty("display");
                }
                else
                {
                    firstRendering = false;
                }
            });
        }
    });
