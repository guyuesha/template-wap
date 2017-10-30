import {
  api,
  httpService,
  http
} from '@/common/http/http.js';
import qs from 'qs';


export const requestLogin = (params = {}) => {
  var qs = require('qs');
  return http.post(api.login, qs.stringify(params), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(function (response) {
      return response;
    });
}

export const openAliPay = function (outTradeNo, openInCurrentPage) {
  let openUrl = httpService + api.payOrder + '?gateId=1001&outTradeNo=' + outTradeNo;
  if (openInCurrentPage) {
    window.location.href = openUrl;
  } else {
    window.open(openUrl);
  }
};


//定义上传相关函数
// export const uploader = Uploader();

//获取上传凭证
export const getUploadInfoFn = (params = {}) => {
  return http.get(api.getToken, {
    params: params
  })
}

export const getRandomName = (fileName) => {
  var index = fileName.lastIndexOf(".");
  var ext = fileName.substr(index + 1);
  let newName = (new Date()).Format("yyyyMMddhhmmss") + '_' + Math.round(Math.random() * 100000) + '_' + Math.round(Math.random() * 1000) + '.' + ext;
  return newName;
};

export const uploadFile = function (file, needRename) {
  var promise = new Promise(function (resolve, reject) {
    uploader.addFile(file, function (curFile) {
      let newFileName = curFile.fileName;
      if (needRename === true) {
        newFileName = getRandomName(curFile.fileName);
      }
      let params = {
        objName: newFileName
      };
      getUploadInfoFn(params).then((res) => {
        let param = {
          bucketName: res.bucket,
          objectName: newFileName,
          token: res.token,
        }
        console.log(param, 'http://' + res.bucket + '.' +
          res.urlPre +
          '/' +
          newFileName);
        uploader.upload(param, function (curFile) {
          let getFileSrc;
          getFileSrc = 'http://' + res.bucket + '.' +
            res.urlPre +
            '/' +
            newFileName;
          console.log('File: ' + newFileName + ' is uploaded.', getFileSrc);
          resolve(getFileSrc);
        });
      }).catch((res) => {
        reject(res);
      });

    })
  });
  return promise;
};

export const getPayInfo = (params = {}) => {
  return http.get(api.queryPayStatus, {
          params: params
      })
      .then(function(response) {
          return response;
      });
};
