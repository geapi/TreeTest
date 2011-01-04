// ==========================================================================
// Project:   TreeTest - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

// This page describes the main user interface for your application.  
TreeTest.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'titleBar listView'.w(),
    
    titleBar: SC.ToolbarView.design({
	    layout: {
	        top: 0,
	        left: 0,
	        right: 0,
	        height: 56
	    },
	    childViews: 'deleteButton'.w(),
	    anchorLocation: SC.ANCHOR_TOP,

	    //delete
	   	deleteButton: SC.ButtonView.design({
            classNames: ["toolBarButton"],
            icon: "sc-icon-delete-16",
            toolTip: "Delete",
            useImageCache: NO,
            title: "delete",
            target: "TreeTest.filesController",
            action: "delete",
			isEnabled: NO,
            isEnabledBinding: 'TreeTest.filesController.hasSelection',
            layout: {
                top: 5,
                height: 32,
                left: 50,
                width: 80
            }
        }),
	}),
	listView: SC.SourceListView.design({
		layout: {left: 20, right: 20, top:56, bottom: 20},
		contentBinding: 'TreeTest.filesController.content',
        selectionBinding: 'TreeTest.filesController.selection',
        contentValueKey: "name",
        rowHeight: 28,
		delegate: 'TreeTest.filesController'
        //canEditContent: YES,
        //canDeleteContent: YES,
        //exampleView: Lilypad.fileView,        
        //target: "TreeTest.foldersController",
        //action: "showDetails"
	})
  })

});
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tree_test');