var login = require("facebook-chat-api");

//app.set("view engine","ejs");
//app.set("views", "./views");
//app.listen(process.env.PORT || 3000);

//app.get("/", function(req, res){
//res.render("trangchu");
//});

var answeredThreads = {};

// Create simple echo bot
login({email: "hbrucehleeh@gmail.com", password: "Hung11116879"}, function callback (err, api) {
    if(err) return console.error(err);

    api.listen(function callback(err, message) {
        var d = new Date();
	// var h = d.getHours();
    	var h =d.getHours();
    	var day = d.getDay();

        if(h >= 14 && h < 24 && !answeredThreads.hasOwnProperty(message.threadID)){ // 2h trua > 11h khuya
            api.getUserInfo(message.senderID, function(err, ret) {
                if(err) return console.error(err);
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Xin chào " + ret[prop].name + ", Tôi là Rose, Người yêu ảo của Hùng, Hùng hiện đã đi công tác...Bạn vui lòng để lại lời nhắn...or liên hệ gấp qua SĐT: 01225.765.834 ...Tôi sẽ chuyển lời nhắn đến người yêu của tôi :P :v", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });
        } else if(h >= 6 && h < 14 && !answeredThreads.hasOwnProperty(message.threadID)) { // 6h > 1h
            api.getUserInfo(message.senderID, function(err, ret) {
                if(err) return console.error(err);
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Xin chào " + ret[prop].name + ", Tôi là Rose, Người yêu ảo của Hùng, Hùng hiện đang đi học, bạn vui lòng để lại lời nhắn...or liên hệ gấp qua SĐT: 01225.765.834, Hùng sẽ liên lạc lại với " + ret[prop].name + " sau nhé!...Thank you!", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });
        } else if(h >= 0 && h < 6 && !answeredThreads.hasOwnProperty(message.threadID)) { // 12h khuya > 5h sang
            api.getUserInfo(message.senderID, function(err, ret) {
                if(err) return console.error(err);
                for(var prop in ret) {
                    if(ret.hasOwnProperty(prop) && ret[prop].name) {
                        api.sendMessage( "Xin chào " + ret[prop].name + ", Tôi là Rose, Người yêu ảo của Hùng, Hùng đang ngủ say...Bạn không nên làm phiền...Người yêu tôi đã dặn tôi như thế!, bạn có thể để lại lời nhắn...or gọi trực tiếp cho Hùng theo SĐT: 01225.765.834 vào 6:00 AM sáng mai...Chúc bạn ngủ ngon!", prop, function(){
                            answeredThreads[message.threadID] = true;
                        });
                    }
                }
            });
        }
    });
});
