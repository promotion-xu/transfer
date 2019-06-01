<template>
  <div class="photo">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleChange"
      :file-list="fileList"
      list-type="picture"
      :before-upload="handleBeforeUpload"
      :http-request="handleHttpRequest"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>


<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
export default class Photo extends Vue {
  private fileList: any = [
    {
      name: 'food.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
    {
      name: 'food2.jpeg',
      url:
        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    },
  ];

  handleHttpRequest(options: any) {
    var that = this;
    // 获取文件对象
    let file = options.file;
    //判断图片类型
    if (
      file.type == 'image/jpeg' ||
      file.type == 'image/png' ||
      file.type == 'image/JPG'
    ) {
      var isJPG = true;
    } else {
      isJPG = false;
    }
    // 判断图片大小
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJPG) {
      this.$message.error('上传产品图片只能是 JPG/PNG/JPEG 格式!');
    }
    if (!isLt2M) {
      this.$message.error('上传产品图片大小不能超过 2MB!');
    }
    // 创建一个HTML5的FileReader对象
    var reader = new FileReader();
    //创建一个img对象
    var img = new Image();
    let filename = options.filename;
    if (file) {
      reader.readAsDataURL(file);
    }
    if (isJPG && isLt2M) {
      reader.onload = e => {
        let base64Str = reader.result.split(',')[1];
        img.src = e.target.result;
        // base64地址图片加载完毕后执行
        img.onload = function() {
          // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          // 图片原始尺寸
          var originWidth = this.width;
          var originHeight = this.height;
          // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
          var maxWidth = 300,
            maxHeight = 300;
          // 目标尺寸
          var targetWidth = originWidth,
            targetHeight = originHeight;
          // 图片尺寸超过最大尺寸的限制
          if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) {
              // 更改宽度，按照宽度限定尺寸
              targetWidth = maxWidth;
              targetHeight = Math.round(
                maxWidth * (originHeight / originWidth)
              );
            } else {
              targetHeight = maxHeight;
              targetWidth = Math.round(
                maxHeight * (originWidth / originHeight)
              );
            }
          }
          //对图片进行缩放
          canvas.width = targetWidth;
          canvas.height = targetHeight;
          // 清除画布
          context.clearRect(0, 0, targetWidth, targetHeight);
          // 图片压缩
          context.drawImage(img, 0, 0, targetWidth, targetHeight);
          /*第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高*/
          //压缩后的base64文件
          var newUrl = canvas.toDataURL('image/jpeg', 0.92);
          that.Api.post('/app/uploadPicture', { fileContent: newUrl })
            .then(res => {
              that.addRule.pictureUrl = res.data;
            })
            .catch(err => {});
        };
      };
    }
  }
  handleChange(file: any, fileList: any) {
    // console.log('change', file);
    if (file.status == 'fail') {
      alert('文件上传失败');
    }
  }
  handleRemove(file: any, fileList: any) {
    // console.log(file, fileList);
  }
  handlePreview(file: any) {
    // console.log('preview');
    // console.log(file);
  }
  handleBeforeUpload(file: any) {
    // console.log('beforeUpload', file);
  }

  transformFileToDataUrl(file: any) {
    const imgCompassMaxSize = 200 * 1024; // 超过 200k 就压缩
    const imgFile: any = {};
    // 存储文件相关信息
    imgFile.type = file.type || 'image/jpeg'; // 部分安卓出现获取不到type的情况
    imgFile.size = file.size;
    imgFile.name = file.name;
    imgFile.lastModifiedDate = file.lastModifiedDate;

    // 封装好的函数
    const reader = new FileReader();

    // file转dataUrl是个异步函数，要将代码写在回调里
    reader.onload = function(e) {
      const result = e.target.result;

      if (result.length < imgCompassMaxSize) {
        this.compress(result, processData, false); // 图片不压缩
      } else {
        this.compress(result, processData); // 图片压缩
      }
    };

    reader.readAsDataURL(file);
  }

  // 使用canvas绘制图片并压缩
  compress(dataURL: any, callback: any, shouldCompress: any = true) {
    const img = new window.Image();

    img.src = dataURL;

    img.onload = function() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let compressedDataUrl;

      if (shouldCompress) {
        compressedDataUrl = canvas.toDataURL(imgFile.type, 0.2);
      } else {
        compressedDataUrl = canvas.toDataURL(imgFile.type, 1);
      }

      callback(compressedDataUrl);
    };
  }
}
</script>
