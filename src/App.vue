<template>
  <div id="app clearfix">
    <h1>Demo演示</h1>
    <div class="clearfix">
      <div class="style fl left">
        <!-- <el-upload
          class="avatar-uploader"
          action
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :httpRequest="handMyPost"
          :on-change="handleUploadChange"
          :before-upload="beforeAvatarUpload"
          :on-preview="handlePictureCardPreview"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>-->
        <el-upload
          class="avatar-uploader"
          action=""
          list-type="picture-card"
          :show-file-list="false"
          :httpRequest="handMyPost"
          :on-preview="handlePictureCardPreview"
          :on-change="handleUploadChange"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          <!-- <i class="el-icon-plus"></i> -->
        </el-upload>
      </div>
      <div class="style fl middle">
        <img src="./assets/right.svg" alt />
      </div>
      <div class="style fl right">
        <div>
          <img :src="imageUrl" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getJson } from './utils/global';
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      imageUrl: '',
      data: {}
    };
  },

  mounted() {
    this.data = getJson();
  },
  methods: {
    handMyPost() {

    },
    handlePictureCardPreview(file) {
      this.imageUrl = file.url;
    },
    async handleUploadChange(file, fileList) {
      let images = {};
      images.base64 = await this.getBase64(file.raw);
      this.imageUrl = images.base64;
      const {documents} = this.data;
      const {coords, lines} = documents;
      var imageWidth = coords[2]; // 图片宽
      var imageHeight = coords[5]; // 图片高
      // 每一行的位置
      var linesOne = lines[0];
      var leftTopPosition = {
        x: linesOne.coords[0],
        y: linesOne.coords[1]
      }
      var rightTopPosition = {
        x: linesOne.coords[2],
        y: linesOne.coords[3]
      }
      var rightBottomPosition = {
        x: linesOne.coords[4],
        y: linesOne.coords[5]
      }
      var leftBottomPosition = {
        x: linesOne.coords[6],
        y: linesOne.coords[7]
      }
      // 每一行的宽度
      var linesOneWidth = Number(linesOne.coords[2]) - Number(linesOne.coords[0]);
      // 每一行的高度
      var linesOneHeight = Number(linesOne.coords[5]) - Number(linesOne.coords[3]);
      console.log(linesOneWidth, linesOneHeight)

    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },


    async getBase64(file) {

      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.style {
  width: 500px;
  height: 600px;
  margin-left: 100px;
  text-align: center;
  line-height: 600px;
  margin-top: 100px;
}

h1 {
  text-align: center;
  font-size: 50px;
}
.middle {
  padding-top: 50px;
}
.right {
  border: 1px dashed #ccc;
}
.right img {
  width: 100%;
  height: 100%;
}
.middle img {
  width: 150px;
  height: 150px;
}
.avatar-uploader {
  height: 100%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 600px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 50px;
  color: #8c939d;
  width: 400px;
  height: 500px;
  line-height: 500px !important;
  text-align: center;
}
.avatar {
  width: 500px;
  height: 600px;
  display: block;
}

.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  content: "";
  display: block;
  clear: both;
}
</style>
