	var phoneType = jQuery('#phome_select').find(':selected').val();
	if(phoneType == 'yunpian'){
			jQuery('#yunpian-sms').show();
	}else if(phoneType == 'juhe'){
			jQuery('#juhe-sms').show();
	}else if(phoneType == 'aliyun'){
			jQuery('#aliyun-sms').show();
	}else if(phoneType == 'others'){
		jQuery('#others-sms').show();
	}else if(phoneType == 'submail'){
		jQuery('#submail-sms').show();
	}else if(phoneType == 'tencent'){
		jQuery('#tencent-sms').show();
	}else{
		jQuery('#zhongzheng-sms').show();
	}
	
	jQuery('#phome_select').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			var array = ['yunpian','juhe','aliyun','zhongzheng','others','submail','tencent'];
			array.forEach(function(_val){
					if(val == _val){
							jQuery('#'+_val+'-sms').show();
					}else{
							jQuery('#'+_val+'-sms').hide();
					}
			});
	})
	
	var checkType = jQuery('#check_type').find(':selected').val();
	if(checkType == 'tel' || checkType == 'telandemail'){
		jQuery('#sms-select').show()
	}else if(checkType == 'luo'){
		jQuery('#luosimao').show()
	}
	
	jQuery('#check_type').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		if(val == 'tel' || val == 'telandemail'){
			jQuery('#sms-select').show()
			jQuery('#luosimao').hide()
		}else if(val == 'luo'){
			jQuery('#sms-select').hide()
			jQuery('#luosimao').show()
		}else{
			jQuery('#sms-select').hide()
			jQuery('#luosimao').hide()
		}
	})
	
	var b2distribution = jQuery('#distribution_conditions').find(':selected').val();
	if(b2distribution === '2'){
		jQuery('.cmb2-id-distribution-user-lv').show()
	}
	
	jQuery('#distribution_conditions').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		jQuery('.cmb2-id-distribution-user-lv').hide()
	
		if(val ==='2'){
			jQuery('.cmb2-id-distribution-user-lv').show()
		}
	})

	var circle_settings = jQuery('#b2_circle_topic_role_open').find(':selected').val();
	if(circle_settings == 1){
		jQuery('#circle-topic-custom-settings').show()
	}
	jQuery('#b2_circle_topic_role_open').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		jQuery('#circle-topic-custom-settings').hide()
	
		if(val ==='1'){
			jQuery('#circle-topic-custom-settings').show()
		}
	})
	
	function changeRadioChange(){
		jQuery('.model-picked').find('input[type="radio"]').on('change',function(){
			changeRaido();
		})
	}
	
	function changeRaido(){
		jQuery('.model-picked').each(function(index,el){
			var picked = jQuery(this).find('input[type="radio"]:checked').val();
	
			jQuery(this).parents('.cmb-repeatable-grouping').find('.set-hidden').hide();
	
			if(picked){
				jQuery(this).parents('.cmb-repeatable-grouping').find('.'+picked+'-module').show();
			}
		})	
	}
	
	changeRadioChange();
	changeRaido();
	
	jQuery('.cmb-add-group-row').on( 'click',function() {
		setTimeout(function(){
			changeRadioChange();
			changeRaido();
		},500)
		downupaction();
	})
	
	function downupaction(){
		setTimeout(function(){
			jQuery('.button-secondary').on( 'click',function() {
				console.log(111);
				setTimeout(function(){
				changeRadioChange();
				changeRaido();
				b2Lvs()
				})
		})
		},500)
	}
	downupaction();

	var shop_settings = jQuery('#zrz_shop_multi').find(':selected').val();
	if(shop_settings == 0){
		jQuery('#shop_count_metabox').show()
		jQuery('#shop_multi_metabox').hide()
		jQuery('#shop_price_metabox').show()
		
	}else{
		jQuery('#shop_count_metabox').hide()
		jQuery('#shop_multi_metabox').show()
		jQuery('#shop_price_metabox').hide()
	}
	jQuery('#zrz_shop_multi').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		
	
		if(val == 0){
			jQuery('#shop_count_metabox').show()
			jQuery('#shop_multi_metabox').hide()
			jQuery('#shop_price_metabox').show()
		}else{
			jQuery('#shop_count_metabox').hide()
			jQuery('#shop_multi_metabox').show()
			jQuery('#shop_price_metabox').hide()
		}

		shop_settings = val
	})

	//商品设置
	var shopType = jQuery('#zrz_shop_type').find(':selected').val();
	if(shopType == 'normal'){
		if(shop_settings == 0){
			jQuery('#shop_price_metabox').show();
		}else{
			jQuery('#shop_multi_metabox').show()
		}
			
	}else if(shopType == 'lottery'){
			jQuery('#shop_lottery').show();
			jQuery('#shop_price_metabox').hide();
		jQuery('#shop_multi_metabox').hide()
		jQuery('.cmb2-id-zrz-shop-multi').hide()
	}else if(shopType == 'exchange'){
			jQuery('#shop_exchange').show();
			jQuery('#shop_price_metabox').hide();
		jQuery('#shop_multi_metabox').hide()
		jQuery('.cmb2-id-zrz-shop-multi').hide()
		
	}

	jQuery('#zrz_shop_type').on('change', function() {
		var val = jQuery(this).find(':selected').val();
		jQuery('#shop_price_metabox').hide();
		jQuery('#shop_multi_metabox').hide()
		jQuery('#shop_lottery').hide();
		jQuery('#shop_exchange').hide();
		jQuery('.cmb2-id-zrz-shop-multi').hide()
		if(val == 'normal'){
			if(shop_settings == 0){
				jQuery('#shop_price_metabox').show();
			}else{
				jQuery('#shop_multi_metabox').show()
			}
			jQuery('.cmb2-id-zrz-shop-multi').show()
		}else if(val == 'lottery'){
			jQuery('#shop_lottery').show();
		}else if(val == 'exchange'){
			jQuery('#shop_exchange').show();
		}
	})

	//小工具颜色选择
	// jQuery(document).on( 'cmb_pre_init', function(evt, cmb) {
	// 	var jQuerypicker = jQuery('#<FIELD_ID>');
	// 	var changeCallback = function(event, obj) {
	// 		console.log('picker changed to:', obj.color.toString());
	// 	};
	// 	var args = jQuerypicker.data('colorpicker');
	// 	if ( args ) {
	// 		args.change = args.change || changeCallback;
	// 	} else {
	// 		args = {
	// 			change: changeCallback
	// 		}
	// 	}
	// 	jQuerypicker.data('colorpicker', args);
	// });
	
	//文章页面视频选择
	var postStyle = jQuery('input[name=b2_single_post_style]:checked').val();
	
	if(postStyle == 'post-style-5'){
		jQuery('#post-style-5-box').show();
	}else{
		jQuery('#post-style-5-box').hide();
	}
	
	jQuery('input[name=b2_single_post_style]').on('change', function() {
			var val = jQuery(this).val();
			console.log(val);
			if(val == 'post-style-5'){
				jQuery('#post-style-5-box').show();
			}else{
				jQuery('#post-style-5-box').hide();
			}
	})
	
	//文章页面视频权限选择
	var phoneType = jQuery('#b2_single_post_video_role').find(':selected').val();
		if(phoneType == 'money'){
				jQuery('.cmb2-id-b2-single-post-video-money').show();
		}else if(phoneType == 'credit'){
				jQuery('.cmb2-id-b2-single-post-video-credit').show();
		}else if(phoneType == 'roles'){
				jQuery('.cmb2-id-b2-single-post-video-roles').show();
		}else if(phoneType == 'none'){
			jQuery('.cmb2-id-b2-single-post-video-money').hide();
			jQuery('.cmb2-id-b2-single-post-video-credit').hide();
			jQuery('.cmb2-id-b2-single-post-video-roles').hide();
		}
	
		jQuery('#b2_single_post_video_role').on('change', function() {
				var val = jQuery(this).find(':selected').val();
				var array = ['money','credit','roles','none','login','comment'];
				array.forEach(function(_val){
						if(val == _val){
								jQuery('.cmb2-id-b2-single-post-video-'+_val).show();
						}else{
								jQuery('.cmb2-id-b2-single-post-video-'+_val).hide();
						}
				});
		})
	
	//文章页面隐藏内容查看权限
	var phoneType = jQuery('#b2_post_reading_role').find(':selected').val();
	if(phoneType == 'money'){
			jQuery('.cmb2-id-b2-post-money').show();
	}else if(phoneType == 'credit'){
			jQuery('.cmb2-id-b2-post-credit').show();
	}else if(phoneType == 'roles'){
			jQuery('.cmb2-id-b2-post-roles').show();
	}else if(phoneType == 'none'){
		jQuery('.cmb2-id-b2-post-money').hide();
		jQuery('.cmb2-id-b2-post-credit').hide();
		jQuery('.cmb2-id-b2-post-roles').hide();
	}
	
	jQuery('#b2_post_reading_role').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			var array = ['money','credit','roles','none','login','comment'];
			array.forEach(function(_val){
					if(val == _val){
							jQuery('.cmb2-id-b2-post-'+_val).show();
					}else{
							jQuery('.cmb2-id-b2-post-'+_val).hide();
					}
			});
	})
	
	var checkType_alipay = jQuery('#alipay').find(':selected').val();
	let alipay_type = ['alipay_normal','xunhu','alipay_hupijiao','mapay','xorpay','payjs','yipay','pay020','suibian'];
	alipay_type.forEach(e => {
		if(checkType_alipay === e){
			jQuery('#'+e).show()
		}
	});
	
	var b2_paypal = jQuery('#paypal_open').find(':selected').val();
	if(b2_paypal == 1){
		jQuery('#paypal_normal').show()
	}else{
		jQuery('#paypal_normal').hide()
	}
	
	jQuery('#paypal_open').on('change', function() {
		let val = jQuery(this).find(':selected').val();
	
		if(val == 1){
			jQuery('#paypal_normal').show()
		}else{
			jQuery('#paypal_normal').hide()
		}
	})
	
	var checkType_wecatpay = jQuery('#wecatpay').find(':selected').val();
	let wecatpay_type = ['wecatpay_normal','xunhu','wecatpay_hupijiao','mapay','xorpay','payjs','yipay','pay020','suibian'];
	wecatpay_type.forEach(e => {
		if(checkType_wecatpay === e){
			jQuery('#'+e).show()
		}
	});
	
	jQuery('#alipay').on('change', function() {
		let val = jQuery(this).find(':selected').val();
		let w = jQuery('#wecatpay').find(':selected').val();
		alipay_type.forEach(e => {
			if(val === e){
				jQuery('#'+val).show()
			}else if(w !== e){
				jQuery('#'+e).hide()
			}
		});
	})
	
	jQuery('#wecatpay').on('change', function() {
		let val = jQuery(this).find(':selected').val();
		let a = jQuery('#alipay').find(':selected').val();
		wecatpay_type.forEach(e => {
			if(val === e){
				jQuery('#'+val).show()
			}else if(a !== e){
				jQuery('#'+e).hide()
			}
		});
	})
	
	var shopxuni = jQuery('#shop_xuni_type').find(':selected').val();
	if(shopxuni == 'html'){
			jQuery('.cmb2-id-shop-xuni-html-resout').show();
	}else if(shopxuni == 'cards'){
			jQuery('.cmb2-id-shop-xuni-cards-resout').show();
	}
	
	jQuery('#shop_xuni_type').on('change', function() {
			var val = jQuery(this).find(':selected').val();
			jQuery('.cmb2-id-shop-xuni-cards-resout').hide();
			jQuery('.cmb2-id-shop-xuni-html-resout').hide();
			if(val == 'html'){
				jQuery('.cmb2-id-shop-xuni-html-resout').show();
			}else if(val == 'cards'){
				jQuery('.cmb2-id-shop-xuni-cards-resout').show();
			}
	})
	
	var xunitype = jQuery('#zrz_shop_commodity').find(':selected').val();
	if(xunitype == '0'){
			jQuery('#shop_xuni').show();
	}
	
	jQuery('#zrz_shop_commodity').on('change', function() {
			var val = jQuery(this).find(':selected').val();
	
			if(val == '0'){
				jQuery('#shop_xuni').show();
			}else{
				jQuery('#shop_xuni').hide();
			}
	})

	//拖动排序
	function b2Lvs(){
		var lvs = document.querySelectorAll('#user_lv_group_repeat .cmb-repeatable-grouping');

		if(lvs){
			for (let i = 0; i < lvs.length; i++) {
				
				lvs[i].querySelector('.cmb-group-title').innerText = lvs[i].querySelector('.cmb-repeat-group-field input').value+'(lv'+i+')'
				
				console.log(lvs[i].querySelector('.cmb-group-title').innerHtml)
				jQuery('#user_lv_group_'+i+'_name').on('input', function(val) {
					lvs[i].querySelector('.cmb-group-title').innerText = val.target.value+'(lv'+i+')'
				});
			}
		}
	
		var vips = document.querySelectorAll('#user_vip_group_repeat .cmb-repeatable-grouping');
		if(vips){
			for (let i = 0; i < vips.length; i++) {
				
				vips[i].querySelector('.cmb-group-title').innerText = vips[i].querySelector('.cmb-repeat-group-field input').value+'(lv'+i+')'
	
				jQuery('#user_vip_group_'+i+'_name').on('input', function(val) {
					vips[i].querySelector('.cmb-group-title').innerText = val.target.value+'(lv'+i+')'
				});
			}
		}

		var multi = document.querySelectorAll('#multi_group_repeat .cmb-repeatable-grouping');

		if(multi){
			for (let i = 0; i < multi.length; i++) {
				
				multi[i].querySelector('.cmb-group-title').innerText = multi[i].querySelector('.cmb-repeat-group-field input').value
				

				jQuery('#multi_group_'+i+'_title').on('input', function(val) {
					multi[i].querySelector('.cmb-group-title').innerText = val.target.value
				});
			}
		}
	
		var index = document.querySelectorAll('#index_group_repeat .cmb-repeatable-grouping');
		if(index){
			for (let i = 0; i < index.length; i++) {
				index[i].querySelector('.cmb-group-title').innerText = index[i].querySelector('.cmb-repeat-group-field input').value
				
				jQuery('#index_group_'+i+'_title').on('input', function(val) {
					index[i].querySelector('.cmb-group-title').innerText = val.target.value
				});

				if(index[i].querySelector('#index_group_'+i+'_short_code')){
					index[i].querySelector('#index_group_'+i+'_short_code').value = '[b2_index_module key='+index[i].querySelector('#index_group_'+i+'_key').value+']'

					jQuery('#index_group_'+i+'_key').on('input', function(val) {
						index[i].querySelector('#index_group_'+i+'_short_code').value = '[b2_index_module key='+val.target.value+']'
					});
				}

				var posttype = jQuery(index[i]).find('[name="index_group['+i+'][post_type]"]:checked').val();

				if(posttype == 'post-3'){
					jQuery(index[i]).find('.list-width').show();
					jQuery(index[i]).find('.list-width-normal').hide();
				}else{
					jQuery(index[i]).find('.list-width').hide();
					jQuery(index[i]).find('.list-width-normal').show();
				}

				if(posttype == 'post-6'){
					jQuery(index[i]).find('.custom-key').show();
				}else{
					jQuery(index[i]).find('.custom-key').hide();
				}
			
				jQuery('[name="index_group['+i+'][post_type]"]').on('change', function() {

					var val = jQuery(this).val();

					if(val == 'post-3'){
						jQuery(index[i]).find('.list-width').show();
						jQuery(index[i]).find('.list-width-normal').hide();
					}else{
						jQuery(index[i]).find('.list-width').hide();
						jQuery(index[i]).find('.list-width-normal').show();
					}

					if(val == 'post-6'){
						jQuery(index[i]).find('.custom-key').show();
					}else{
						jQuery(index[i]).find('.custom-key').hide();
					}

				})
				
			}
		}
				
		var video =document.querySelectorAll('#b2_single_post_video_group_repeat .cmb-repeatable-grouping');
		if(video){
			for (let i = 0; i < video.length; i++) {
				video[i].querySelector('.cmb-group-title').innerText = video[i].querySelector('.cmb-repeat-group-field input').value
				
				jQuery('#b2_single_post_video_group_'+i+'_title').on('input', function(val) {
					video[i].querySelector('.cmb-group-title').innerText = val.target.value
				});
			}
		}
	
		var download =document.querySelectorAll('#b2_single_post_download_group_repeat .cmb-repeatable-grouping');
		if(download){
			for (let i = 0; i < download.length; i++) {
				download[i].querySelector('.cmb-group-title').innerText = download[i].querySelector('#b2_single_post_download_group_'+i+'_name').value
				
				jQuery('#b2_single_post_download_group_'+i+'_name').on('input', function(val) {
					download[i].querySelector('.cmb-group-title').innerText = val.target.value
				});
			}
		}
	}
	b2Lvs()
	var tax =jQuery('#b2_group_repeat');

	if(tax){
		var posttype = tax.find('[name="b2_group[0][post_type]"]:checked').val();
		
		if(posttype == 'post-3'){
			tax.find('.list-width').show();
			tax.find('.list-width-normal').hide();
		}else{
			tax.find('.list-width').hide();
			tax.find('.list-width-normal').show();
		}

		if(posttype == 'post-6'){
			tax.find('.custom-key').show();
		}else{
			tax.find('.custom-key').hide();
		}
	
		jQuery('[name="b2_group[0][post_type]').on('change', function() {

			var val = jQuery(this).val();

			if(val == 'post-3'){
				tax.find('.list-width').show();
				tax.find('.list-width-normal').hide();
			}else{
				tax.find('.list-width').hide();
				tax.find('.list-width-normal').show();
			}

			if(val == 'post-6'){
				tax.find('.custom-key').show();
			}else{
				tax.find('.custom-key').hide();
			}
		})
	}
	

	function modulessortable(){
		// 	jQuery( "#index_group_repeat" ).sortable({
		// 	connectWith: ".cmb-row cmb-repeatable-grouping"
		//   });
	
		  jQuery( ".cmb-repeatable-group" ).not('#user_lv_group_repeat').not('#user_vip_group_repeat').sortable({
			connectWith: ".cmb-row cmb-repeatable-grouping",
			cancel: ".cmb-group-description",
			delay: 150,
			handle: ".cmbhandle-title",
			axis: "y",
			dropOnEmpty: false
		  });
	
		//   jQuery( "#b2_single_post_download_group_repeat" ).sortable({
		// 	connectWith: ".cmb-row cmb-repeatable-grouping"
		//   });
	
		  jQuery('.cmb-repeatable-grouping .cmb-field-list').mousedown(function(e){
			e.stopPropagation();
	
		  }).mouseup(function(e){
			e.stopPropagation();
	
		  })
	
		//   jQuery('.cmb-repeatable-grouping .cmb-field-list').on('touchstart',function(e){
		// 	e.stopPropagation();
	
		//   }).on('touchend',function(e){
		// 	e.stopPropagation();
	
		//   })
	
	}
	modulessortable()
	
		jQuery( '#index_group_repeat' )
		.on( 'cmb2_remove_row', function() {
			setTimeout(() => {
				b2Lvs()
				modulessortable()
			}, 500);
		});
	
		// fieldTable.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
		// });
	
		// var lv  = jQuery( '#user_lv_group_repeat' ) ;
		// lv.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// lv.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var vip  = jQuery( '#user_vip_group_repeat' ) ;
		// vip.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		// vip.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var video  = jQuery( '#b2_single_post_video_group_repeat' ) ;
		// video.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		// video.on( 'cmb2_add_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
	
		// var download  = jQuery( '.cmb-repeatable-group' ) ;
		// download.on( 'cmb2_remove_row', function() {
		// 	setTimeout(() => {
		// 		b2Lvs()
		// 	}, 500);
			
		// });
		jQuery( '.cmb-repeatable-group' ).on( 'cmb2_add_row', function() {
			setTimeout(() => {
				b2Lvs()
				modulessortable()
			}, 500);
		});
	
	var xunitype = jQuery('#b2_dark_room').find(':selected').val();
	if(xunitype == 1){
			jQuery('#dark-room').show();
	}
	
	jQuery('#b2_dark_room').on('change', function() {
			var val = jQuery(this).find(':selected').val();
	
			if(val == 1){
				jQuery('#dark-room').show();
			}else{
				jQuery('#dark-room').hide();
			}
	})


	function b2getFilename(event){
	
		let file = event.target.files[0]
	
		var formData = new FormData();
	
	
		formData.append('file',file,file.name)
	
		jQuery.ajax({
			url: cmb2_l10.ajaxurl+'?action=b2_insert_settings',
			type: 'POST',
			data: formData,
			success: function (data) {
				alert('导入成功')
				document.querySelector('#b2getFilename').value = ''
			},
			cache: false,
			contentType: false,
			processData: false
		});
		
	}

	var b2multi = new Vue({
		el:'#shop_multi_metabox',
		data:{
			select:'none',
			key:'',
			keys:[],
			values:[],
			skuList:[],
			attrs:[],
			skuLocked:false,
			imageFrame:''
		},
		mounted(){

			if(typeof b2shoptemplate == 'undefined') return
			
			if(b2shoptemplate.default){
				this.setJson(b2shoptemplate.default)
			}

			jQuery('#b2_multi_box').on('input',(ev)=>{
				this.setJson(ev.target.value,true)
			});

			this.skuList = this.cartesian(this.values)
		},
		computed:{
			data(){
				let data = {
					keys:this.keys,
					values:this.values,
					skuList:this.skuList,
					attrs:this.attrs
				}
				document.querySelector('#b2_multi_box').value = JSON.stringify(data)
			}
		},
		watch:{
			select(val){
				if(val !== 'none'){
					this.keys = b2shoptemplate.templates[val]['keys']
					this.values = b2shoptemplate.templates[val]['values']
					this.skuList = this.cartesian(this.values)
				}
			},
			skuList(){
				if(this.skuLocked == true) return
				this.skuLocked = false
				let arr = []
				this.skuList.forEach((val,index)=>{
					arr[index] = {
						price:'',
						dprice:'',
						uprice:'',
						credit:'',
						count:'',
						sell:'',
						img:'',
						imgId:''
					}
				})
				this.attrs = arr

			}
		},
		methods:{
			openLibrary(i){
				if(!this.imageFrame){
					this.imageFrame = wp.media({
						title: '选择图片',
						multiple : false,
						library : {
							type : 'image',
						},
						button: {text: '选择'}
					});
					
				}

				// let selection =  this.imageFrame.state().get('selection');
				// selection.add( [] );
				this.imageFrame.off('select')
				this.imageFrame.off('open')

				this.imageFrame.on('select',()=>{
					let selection =  this.imageFrame.state().get('selection');
					let _attachment = selection.first().toJSON();

					if(i == 'all'){
						let url = {
							target:{
								value:_attachment.url
							}
						}
						this.batch('img',url)

						let id = {
							target:{
								value:_attachment.id
							}
						}
						this.batch('imgId',id)
					}else{
						this.attrs[i].imgId = _attachment.id
						this.attrs[i].img = _attachment.url
					}

					
				});
   
				// image_frame.on('close',()=>{
				// 	var selection =  image_frame.state().get('selection');
				// 	console.log(selection)
				// });

				this.imageFrame.on('open',()=>{

					let selection =  this.imageFrame.state().get('selection');

					let index = i

					if(i == 'all'){
						index = 0
					}

					if(this.attrs.length > 0 && this.attrs[index].imgId){
						let attachment = wp.media.attachment(this.attrs[index].imgId);
						attachment.fetch();
						selection.add( attachment ? [ attachment ] : [] );
					}
					
				});
				this.imageFrame.open();
			},
			setJson(val,action){
				let data = JSON.parse(val)
				this.keys = data.keys
				this.values = data.values
				this.skuList = data.skuList
				this.attrs = data.attrs

				if(!action){
					document.querySelector('#b2_multi_box').value = val
				}
				
				this.skuLocked = true
			},
			batch(type,event){

				this.attrs.forEach((val,index)=>{
					this.attrs[index][type] = event.target.value
				})

			},
			addKey(){
				this.skuLocked = false
				this.keys.push(this.key)
				this.key = ''
				this.values.push(['-'])
				this.skuList = this.cartesian(this.values)
			},
			addVaule(index,event){
				this.skuLocked = false
				if(event.target.previousElementSibling.value){

					if(!this.values[index] || this.values[index][0] == '-'){
						this.$set(this.values,index,[])
					}

					if(!this.values[index].includes(event.target.previousElementSibling.value)){
						this.values[index].push(event.target.previousElementSibling.value)

						event.target.previousElementSibling.value = ''
						this.skuList = this.cartesian(this.values)
					}
				}
			},
			remove(index){
				this.skuLocked = false
				var r = confirm("确定要删除这个规格吗？");
				if (r == true) {
					this.keys.splice(index,1)
					this.values.splice(index,1)
					
					this.skuList = this.cartesian(this.values)
				}
			},
			removeKey(index,i){
				this.skuLocked = false
				var r = confirm("确定要删除这个值吗？");
				if (r == true) {
					this.values[index].splice(i,1)
					this.skuList = this.cartesian(this.values)
				}
			},
			stopSubmit(event){
				if(event.keyCode==13) return false
			},
			rebuildList(){
				
			},
			cartesian(arr) {
				if (arr.length < 2) return arr[0] || [];
				return [].reduce.call(arr, function (col, set) {
					let res = [];
					col.forEach(c => {
						set.forEach(s => {
							let t = [].concat(Array.isArray(c) ? c : [c]);
							t.push(s);
							res.push(t);
						})
					});
					return res;
				});
			}
		}
	})