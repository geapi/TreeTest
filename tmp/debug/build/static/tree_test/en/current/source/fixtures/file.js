// ==========================================================================
// Project:   TreeTest.File Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals TreeTest */

sc_require('models/file');

TreeTest.File.FIXTURES = [

	{
	    guid: "/",
	    name: 'root',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: null,
	    files: [
		'/Folder1', '/Folder2', '/Folder3', '/Trash',
		'/file1.txt',
	      '/file2.jpg',
	      '/file3.png']
	  }, {  
	    guid: '/Folder1',
	    name: 'Folder1',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/',
	    files: [
	      '/Folder1/4397242135_9b68c918b2_m.jpg',
	      '/Folder1/4394663666_06cae74ccf_m.jpg',
	      '/Folder1/4389591430_fbbe67f9a0_m.jpg'
	    ]
	  },{
	    guid: '/Folder2',
	    name: 'Folder2',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/',
	    files: []
	  }, {
	    guid: '/Folder3',
	    name: 'Folder3',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/',
	    files: [
			 '/Folder3/SubFolder1',
		      '/Folder3/SubFolder2',
		      '/Folder3/SubFolder3'
		]
	  }, {
	    guid: '/Folder3/SubFolder1',
	    name: 'SubFolder1',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/Folder3',
	    files: []
	  }, {
	    guid: '/Folder3/SubFolder2',
	    name: 'SubFolder2',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/Folder3',
	    files: []
	  }, {
	    guid: '/Folder3/SubFolder3',
	    name: 'SubFolder3',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111,
	    parentDirectory: '/Folder3',
	    files: []
	  },
	  { guid: '/Trash', 
		name: 'Trash',
		isDirectory: YES,
		date: "11/22/2011",
		size: 1111, 
		parentDirectory: '/',
		files: []
	  },{ 
		guid: '/Folder1/4397242135_9b68c918b2_m.jpg',
		name: '4397242135_9b68c918b2_m.jpg',
		isDirectory: NO,
		date: "11/22/2011",
		size: 1111,
		parentDirectory: '/Folder1',
		files:[]
	},{
		guid: '/Folder1/4394663666_06cae74ccf_m.jpg',
		name: '4394663666_06cae74ccf_m.jpg',
		isDirectory: NO,
		date: "01/22/2011",
		size: 883,
	  	parentDirectory: '/Folder1',
		files:[]
}, {
		guid: '/Folder1/4389591430_fbbe67f9a0_m.jpg',
		name: '4389591430_fbbe67f9a0_m.jpg',
		isDirectory: NO,
		date: "01/21/2011",
		size: 77789,
	  	parentDirectory: '/Folder1',
		files:[]
	}	,{ 
			guid: '/file1.txt',
			name: 'file1.txt',
			isDirectory: NO,
			date: "11/22/2011",
			size: 1111,
			parentDirectory: '/',
			files:[]
	  	},{
			guid: '/file2.jpg',
			name: 'file2.jpg',
			isDirectory: NO,
			date: "01/22/2011",
			size: 883,
		  	parentDirectory: '/',
			files:[]
	  }, {
			guid: '/file3.png',
			name: 'file3.png',
			isDirectory: NO,
			date: "01/21/2011",
			size: 77789,
		  	parentDirectory: '/',
			files:[]
		}

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tree_test');