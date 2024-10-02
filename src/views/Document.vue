<template>
    <div class="main_section">
        <div style="text-align: center;">
            <h1>everyone-llm</h1>
        </div>

        <div class="container">

            <div class="chat_container">
                <div class="col-sm-3 hidden-xs chat_sidebar">
                    <!-- <div class="row" style="padding: 10px;">
                        Sidebar
                    </div> -->
                    <div class="hidden lg:fixed lg:inset-y-0 lg:z-40 lg:flex lg:w-65 lg:flex-col">
                        <!-- Sidebar component, swap this element with another sidebar if you like -->
                        <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 px-6 pb-4">
                            <div class="flex h-16 shrink-0 items-center">
                                <h3>开发喵AI（3IN1）</h3>
                                <img class="h-8 w-auto" src="../assets/logo/logo.png" alt="Your Company" />
                            </div>
                            <nav class="flex flex-1 flex-col">
                                <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                    <li>
                                        <div @click="addChat"
                                            class="text-gray-700 cursor-pointer hover:text-gray-600 hover:bg-indigo-300 group -mx-2 space-y-1 flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold">
                                            ➕ new Chat
                                        </div>
                                    </li>
                                    <li>
                                        <ul role="list" class="-mx-2 space-y-1">
                                            <li v-for="item in chatSession" :key="item.name" @click="selectChat(item)"
                                                class="cursor-pointer">
                                                <div class="text-xs font-semibold leading-6 text-gray-400">{{
                                                    item.nowTime }}</div>
                                                <div
                                                    :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                                                    {{ item.name }}
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="mt-auto">
                                        <div
                                            class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                                            <Cog6ToothIcon
                                                class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                                aria-hidden="true" />
                                            Settings
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!--Ads_sidebar-->


                <div class="col-sm-7 message_section">
                    <div class="row" style="background-image:url(http://cdn.css-tricks.com/images/forums-bg.png)">
                        <div class="new_message_head">
                            <div class="pull-left">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenu3"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        <i class="fa fa-weixin" aria-hidden="true"></i> Conversations 
                                        <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenu3">
                                        <li>
                                            <div id="custom-search-input">
                                                <div class="input-group col-md-12">
                                                    <input type="text" class=" search-query form-control"
                                                        placeholder="Conversation" />
                                                    <button class="btn btn-danger" type="button">
                                                        <span class=" glyphicon glyphicon-search"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li role="separator" class="divider"></li>

                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="left clearfix conversations">
                                            <div class="chat-body clearfix">
                                                <div class="header_sec">
                                                    <strong class="primary-font">Yo McMoney</strong>
                                                </div>
                                                <div class="contact_sec">
                                                    <span class="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="pull-right">
                                <div class="dropdown">
                                    <button class="dropdown-toggle" type="button" id="dropdownMenu1"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                            class="fa fa-cogs" aria-hidden="true"></i> Setting <span
                                            class="caret"></span></button>
                                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                        <li><a href="#">Action</a></li>
                                        <li><a href="#">Profile</a></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--new_message_head-->

                        <div class="chat_area">
                            <ul class="list-unstyled">
                                <li class="left clearfix partner_chat">
                                    <span class="chat-img1 pull-left">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <p>
                                            <span style="color:rgb(107,203,239); display:block">Yo McMoney</span>

                                            <span style="display:block; padding:5px 0px 5px 0px;">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                                                professor at Hampden-Sydney College in
                                                Virginia.
                                            </span>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </p>
                                    </div>
                                </li>

                                <li class="left clearfix partner_chat">
                                    <span class="chat-img1 pull-left">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">

                                        <p>
                                            <span style="display:block; padding:5px 0px 5px 0px;">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                                                professor at Hampden-Sydney College in
                                                Virginia.
                                            </span>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </p>

                                    </div>
                                </li>

                                <li class="left clearfix partner_chat">
                                    <span class="chat-img1 pull-left">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <div class="image_chat">
                                            <span style="color:rgb(107,203,239); display:block">Yo McMoney</span>

                                            <div class="image_thumb" style="padding:5px 0px 5px 0px;">
                                                <img src="./image1.jpg" class="img-responsive" alt="image1">
                                            </div>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="left clearfix admin_chat">
                                    <span class="chat-img1 pull-right">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <div class="image_chat">
                                            <span style="color:rgb(107,203,239); display:block; text-align:right">Yo
                                                McMoney</span>

                                            <div class="image_thumb" style="padding:5px 0px 5px 0px; display:block;">
                                                <img src="./image1.jpg" class="img-responsive" alt="image1">
                                            </div>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </div>
                                    </div>
                                </li>

                                <li class="left clearfix partner_chat">
                                    <span class="chat-img1 pull-left">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <p>
                                            <span style="display:block; padding:5px 0px 5px 0px;">Contrary to popular
                                                belief</span>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </p>
                                    </div>
                                </li>

                                <li class="left clearfix admin_chat">
                                    <span class="chat-img1 pull-right">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <p>
                                            <span style="display:block; padding: 5px 0px 5px 0px;">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature
                                                from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                                                professor at Hampden-Sydney College in
                                                Virginia.
                                            </span>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </p>
                                    </div>
                                </li>

                                <li class="left clearfix admin_chat">
                                    <span class="chat-img1 pull-right">
                                        <img src="https://lh3.googleusercontent.com/-SEkCoiLsxMk/AAAAAAAAAAI/AAAAAAAAAAA/AAyYBF4DUk-ifOFiwhGXBoOheEF7P0ZW1g/s32-c-mo/photo.jpg"
                                            alt="User Avatar" class="img-circle">
                                    </span>

                                    <div class="chat-body1 clearfix">
                                        <p>
                                            <span style="display:block; padding:5px 0px 5px 0px;">Contrary to popular
                                                belief.</span>

                                            <span
                                                style="font-size:0.85em; color:grey; display:block; float:right;">09:40PM</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!--chat_area-->

                        <div class="col-sm-8 message_write">
                            <textarea class="form-control" placeholder="type a message"></textarea>
                            <div class="chat_bottom"><a href="#" class="pull-left upload_btn">
                                <i
                                        class="fa fa-paperclip fa-2x" aria-hidden="true"></i> Add Files</a>
                                <a href="#" class="pull-right btn btn-success">Send</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!--message_section-->

                <div class="col-sm-2 hidden-xs chat_sidebar">
                    <div class="row" style="text-align: center">
                        Ads..sidebar
                    </div>
                </div>
                <!--Ads_sidebar-->
            </div>
        </div>
    </div>
</template>

<script setup>
import { Cog6ToothIcon } from '@heroicons/vue/24/outline'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//对话
const chatSession = [
  { name: 'Team', nowTime: "昨天", chatHistory: [{}], current: false },
  { name: 'Projects', nowTime: "今天", chatHistory: [{}], current: false },
]

const addChat = () => {
  console.log('addChat')
  chatSession.push({ name: 'Team', nowTime: "昨天", chatHistory: [{}], current: false })
}
</script>

<style scoped>
body {
    max-height: 100vh !important;

}

main_container {
    max-height: 100vh !important;
}

div {
    background-color: white;
}

div.container {
    margin: 0px;
    padding: 0px;
    width: 100%;

}

div.chat_container {
    display: flex;
    justify-content: center;
    background-color: rgb(245, 245, 245);
    min-height: 100vh;
}

#custom-search-input {
    background: #fff none repeat scroll 0 0;
    margin: 0;
    padding: 7px;
    border: none;
    position: relative;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    -o-filter: blur(0px);
}

#custom-search-input::before {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    filter: blur(15px);
    -webkit-filter: blur(20px);
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    -o-filter: blur(15px);
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

input.search-query.form-control {
    box-shadow: none;
    border-radius: 0px;
    border-color: rgba(0, 0, 0, 0);

}

input.search-query.form-control:focus {
    box-shadow: none;
    border-radius: 0px;
    border-color: #dddddd;
}

/*div.input-group.col-md-12 {
	width: 30%;
  -webkit-transition: width .35s ease-in-out;
	-moz-transition: width .35s ease-in-out;
  transition: width .35s ease-in-out;
}

div.input-group.col-md-12:active {
	width: 100%;
}*/

ul.dropdown-menu.dropdown-menu-left li.divider {
    margin-bottom: 0px;
}

#custom-search-input .search-query {
    background: #fff none repeat scroll 0 0 !important;
    border-radius: none;
    height: 33px;
    margin-bottom: 0;
    padding-left: 7px;
    padding-right: 7px;
}

#custom-search-input button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: 0 none;
    border-radius: 3px;
    color: #666666;
    left: auto;
    margin-bottom: 0;
    margin-top: 7px;
    padding: 2px 5px;
    position: absolute;
    right: 0;
    z-index: 9999;
}

.search-query:focus+button {
    z-index: 3;
}

.all_conversation button {
    background: #f5f3f3 none repeat scroll 0 0;
    border: 1px solid #dddddd;
    height: 38px;
    text-align: left;
    width: 100%;
}

.all_conversation i {
    background: #e9e7e8 none repeat scroll 0 0;
    border-radius: 100px;
    color: #636363;
    font-size: 17px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 30px;
}

.all_conversation .caret {
    bottom: 0;
    margin: auto;
    position: absolute;
    right: 15px;
    top: 0;
}

.all_conversation .dropdown-menu {
    background: #f5f3f3 none repeat scroll 0 0;
    border-radius: 0;
    margin-top: 0;
    padding: 0;
    width: 100%;
}

.all_conversation ul li {
    border-bottom: 1px solid #dddddd;
    line-height: normal;
    width: 100%;
}

.all_conversation ul li a:hover {
    background: #dddddd none repeat scroll 0 0;
    color: #333;
}

.all_conversation ul li a {
    color: #333;
    line-height: 30px;
    padding: 3px 20px;
}

li.conversations a {
    color: #333;
    line-height: 30px;
    padding: 3px 20px;
}

li.conversations {
    border-bottom: 1px solid #dddddd;
    line-height: normal;
}

li.conversations:hover {
    background: #dddddd none repeat scroll 0 0;
    color: #fff;
    cursor: pointer;
}

li.conversations:last-child {
    border-bottom: none;
}

div.header_sec {
    display: inline-block;
}

div.header_sec .primary-font {
    padding: 0px 10px;
}

div.contact_sec {
    position: absolute;
    display: inline-block;
    right: 5px;
}

div.chat-body.clearfix {
    padding: 10px 0px;
}

/*.member_list .chat-body {
 	margin-left: 47px;
 	margin-top: 0;
 }*/

.top_nav {
    overflow: visible;
}

/* .member_list .contact_sec {
 	margin-top: 3px;
 }

 .member_list li {
 	padding: 6px;
 }

 .member_list ul {
 	border: 1px solid #dddddd;
 }*/

.chat-img img {
    height: 34px;
    width: 34px;
}

/*.member_list li {
 	border-bottom: 1px solid #dddddd;
 	padding: 6px;
 }

 .member_list li:last-child {
 	border-bottom: none;
 }

 .member_list {
 	height: 60vh auto;
 	overflow-x: hidden;
 	overflow-y: auto;
 }*/

.sub_menu_ {
    background: #e8e6e7 none repeat scroll 0 0;
    left: 100%;
    max-width: 233px;
    position: absolute;
    width: 100%;
}

.sub_menu_ {
    background: #f5f3f3 none repeat scroll 0 0;
    border: 1px solid rgba(0, 0, 0, 0.15);
    display: none;
    left: 100%;
    margin-left: 0;
    max-width: 233px;
    position: absolute;
    top: 0;
    width: 100%;
}

.all_conversation ul li:hover .sub_menu_ {
    display: block;
}

.new_message_head button {
    background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    border: medium none;
}

.new_message_head {
    background: rgba(230, 240, 255, 1);
    color: #777777;
    float: left;
    font-size: 13px;
    font-weight: 600;
    padding: 18px 10px;
    width: 100%;
    position: relative;
    filter: blur(0px);
    -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -ms-filter: blur(0px);
    -o-filter: blur(0px);
    z-index: 999;
    /*backdrop-filter: blur(5	px);*/
}

.new_message_head::before {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    overflow: hidden;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-image: url(http://cdn.css-tricks.com/images/forums-bg.png);
    filter: blur(15px);
    -webkit-filter: blur(20px);
    -moz-filter: blur(15px);
    -ms-filter: blur(15px);
    -o-filter: blur(15px);
}

.message_section {
    border: 1px solid #dddddd;
}

.message_section .row {
    height: 99vh;
}

.chat_area {
    float: left;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    margin-bottom: 0px;
    max-height: 82vh;
}

.chat_area ul.list-unstyled {
    margin-bottom: 0px;
    padding-bottom: 55px;
}

.chat_area li {
    padding: 14px 14px 0;
}

.chat_area li .chat-img1 img {
    height: 40px;
    width: 40px;
}

.chat_area .chat-body1 {
    margin-left: 50px;
}

.chat-body1 p {
    background: rgba(245, 243, 243, 0.9) none repeat scroll 0 0;
    padding: 10px;
    border-radius: 10px;
    min-width: 50px;
    max-width: 90%;
    padding-bottom: 7px;
    margin-top: 10px;
    display: block;
}

.chat_area .admin_chat .chat-body1 {
    margin-left: 0;
    margin-right: 50px;
}

.admin_chat .chat-body1.clearfix p {
    float: right;
    box-sizing: content-box;
    position: relative;
    min-width: 50px;
    max-width: 90%;
}

.partner_chat .chat-body1.clearfix div.image_chat {
    background: rgba(245, 243, 243, 0.9) none repeat scroll 0 0;
    padding: 10px;
    border-radius: 10px;
    display: block;
    max-width: 60%;
    margin-top: 10px;
    float: left;
    box-sizing: content-box;
    position: relative;
}

.partner_chat .chat-body1.clearfix .image_chat::before {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgba(245, 243, 243, 0.9);
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: -7px;
}

.admin_chat .chat-body1.clearfix div.image_chat {
    background: rgba(245, 243, 243, 0.9) none repeat scroll 0 0;
    padding: 10px;
    border-radius: 10px;
    display: block;
    max-width: 60%;
    margin-top: 10px;
    float: right;
    box-sizing: content-box;
    position: relative;
}

.admin_chat .chat-body1.clearfix .image_chat::before {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgba(245, 243, 243, 0.9);
    border-radius: 50%;
    position: absolute;
    right: -8px;
    top: -7px;
}

.partner_chat .chat-body1.clearfix p {
    float: left;
    box-sizing: content-box;
    position: relative;
    min-width: 50px;
    max-width: 90%;
}

.admin_chat .chat-body1.clearfix p::before {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgba(245, 243, 243, 0.9);
    border-radius: 50%;
    position: absolute;
    right: -8px;
    top: -7px;
}


.partner_chat .chat-body1.clearfix p::before {
    display: block;
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgba(245, 243, 243, 0.9);
    border-radius: 50%;
    position: absolute;
    left: -8px;
    top: -7px;
}

ul.dropdown-menu {
    min-width: 250px;
    box-shadow: 0px 4px 8px 2px rgba(25, 25, 25, 0.4);
    border-radius: 0px;
    border: none;
}

.chat_area li:last-child {
    padding-bottom: 10px;
}

.message_write {
    background: #f5f3f3 none repeat scroll 0 0;
    /* float: left; */
    padding: 15px 15px 15px 15px;
    width: 55%;
    position: absolute;
    bottom: 0px;
    margin-top: 0px;

}

.message_write textarea.form-control {
    /*padding: 10px;*/
    border-radius: 0px;
    border-color: #dddddd;
    box-shadow: none;
    -webkit-transition: box-shadow .25s ease-in-out;
    -moz-transition: box-shadow .25s ease-in-out;
    transition: box-shadow .25s ease-in-out;
    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    line-height: 20px;
    height: 50px;
    min-height: 50px;
    max-height: 100px;
    word-wrap: break-word;
    white-space: pre-wrap;
    text-rendering: optimizeLegibility;
}

.message_write textarea.form-control:focus {
    box-shadow: 0px 5px 8px 2px rgba(25, 25, 25, 0.4);
}

a.pull-right.btn.btn-success {
    background-color: #777777;
    border-radius: 0px;
    border: none;
}

a.pull-right.btn.btn-success:hover {
    background-color: #dddddd;
    color: #777777;
}

i.fa.fa-paperclip.fa-2x {
    transform: rotateY(180deg);
}

.chat_bottom {
    float: left;
    margin-top: 13px;
    width: 100%;
}

.upload_btn {
    color: #777777;
    padding: 0px 10px;
}

.sub_menu_>li a,
.sub_menu_>li {
    float: left;
    width: 100%;
}

.member_list li:hover {
    background: #428bca none repeat scroll 0 0;
    color: #fff;
    cursor: pointer;
}
</style>