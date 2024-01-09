
$(window).on('load', function(){
	bbs.init();
});

var bbs = {
	init : function(){		
		bbs.layoutSet();
	},
	layoutSet : function(){
		//�Խ��� Ÿ��Ʋ �����ܺ� �ִ� ���̰� ����
		$(".bbs_list .noticeTitle").each(function(){
			var overflowTextWidth = "";
			for(i=1; i <= $(this).find("i").length; i++){
				if($(this).find("i:nth-of-type("+i+")").is(":visible") == true){
					overflowTextWidth = Number(overflowTextWidth) + Number($(this).find("i:nth-of-type("+i+")").outerWidth(true));
				}
			}
			$(this).find("p").css("max-width", "calc(100% - "+overflowTextWidth+"px)");			
		});
		
		//����¡ ���ڰ� 100������ �����
		if($(".numberPagination>.paging>li>button").eq(0).text().length > 2){
			$(".numberPagination").addClass("sm");
		}
		
	}
}
