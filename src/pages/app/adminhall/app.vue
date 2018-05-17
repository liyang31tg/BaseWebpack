<template>
    <div style="margin:0 auto;column-rule: aliceblue;color: aqua">
        LiYanssasdg:{{accountname}}
    </div>
</template>

<!--MARK:这里不能写样式类型-->
<style>
    body{
        font-size: 18px;
    }
    .cc{
        font-family: "Andale Mono";
    }
</style>
<!--MARK:这里不能写样式类型-->
<script>
    import print from '../../../print';
    print()
    console.log("dddd");
    export default {
        data() {
            return {
                accountname:"liyang"
            }
        },
        created(){
            console.log("asdasdfafsad")
        }
    };

</script>