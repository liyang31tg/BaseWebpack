<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>
        <%= htmlWebpackPlugin.options.title %>
    </title>
    <% for (var i in htmlWebpackPlugin.options.cdn.css) { %>
        <link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>">
        <% } %>
            <style type="text/css">
            body {
                margin: 0px;
                padding: 0px;
                /*background-color: #e6e6e6;*/
            }
            button{
                border:none;
            }
            </style>
</head>

<body>
    <div id="app"></div>
    <% for (var i in htmlWebpackPlugin.options.cdn.js) { %>
        <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
        <% } %>
</body>

</html>
<style>
 .mint-button--primary{
        background-color: #36aa47;
    }
    .mint-button--default{
        background-color: #4b8df8;
        color: white;
    }
        .bootll {/*底线*/
            background-image: linear-gradient(0deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
            background-size: 120% 1px;
            background-repeat: no-repeat;
            background-position: top left;
            background-origin: content-box;
        }
</style>