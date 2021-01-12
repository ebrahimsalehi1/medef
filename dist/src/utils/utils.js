"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFile = exports.biLogin = exports.hasSystemFeatures = exports.deleteFromList = exports.updateList = exports.addToList = exports.callRestGet = exports.callRestDelete = exports.callRestPut = exports.callRestPost = exports.callRestPost2 = exports.getText = exports.getConfigData = void 0;
const axios_1 = require("axios");
//import webservices from '../../public/webservices.json';
//import jsonData from '../../db.json';
function getConfigData(key1, key2) {
    const configVal = localStorage.getItem('config');
    if (configVal) {
        return key2 ? JSON.parse(configVal)[key1][key2] : JSON.parse(configVal)[key1];
    }
    return null;
}
exports.getConfigData = getConfigData;
function getText(keyStr) {
    const lang = getConfigData('language');
    const result = lang === 'en' ? translationEn.filter(item => item.str === keyStr).map(item => item.val) : translationFa.filter(item => item.str === keyStr).map(item => item.val);
    return String(result[0]);
}
exports.getText = getText;
function getUrlByKey(key) {
    return webservices.filter(item => item.name === key)[0]['bffUrl'].replace(":0", getConfigData('host'));
}
function getUrlParamList(key, urlParams) {
    let url = new String(getUrlByKey(key));
    if (urlParams === null || urlParams === undefined || urlParams.length === 0)
        return url;
    let i = 0;
    urlParams.forEach(param => {
        i++;
        url = url.replace(':' + i, param);
    });
    return url;
}
function callRestPost2(key, urlParams, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = getUrlParamList(key, urlParams);
        return yield fetch(url, {
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers": "Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age": "3600",
            },
            referrerPolicy: 'no-referrer',
            redirect: 'follow',
            credentials: 'same-origin',
            body: JSON.stringify(data)
        })
            .then(response => response.json());
    });
}
exports.callRestPost2 = callRestPost2;
function callRestPost(key, urlParams, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (getConfigData('serviceType') === 'file') {
            return new Promise((resolve, reject) => {
                const foundData = jsonData[key];
                if (foundData)
                    resolve({ data: foundData, status: 200 });
                else
                    setTimeout(() => {
                        resolve({ data: "OK", status: 200 });
                    }, 2000);
            });
        }
        const url = getUrlParamList(key, urlParams);
        return yield axios_1.default({
            url: url,
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers": "Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age": "3600",
            },
            referrerPolicy: 'no-referrer',
            redirect: 'follow',
            credentials: 'same-origin',
            data: data
        });
    });
}
exports.callRestPost = callRestPost;
function callRestPut(key, urlParams, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (getConfigData('serviceType') === 'file') {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ data: "Ok", status: 200 });
                }, 2000);
            });
        }
        const url = getUrlParamList(key, urlParams);
        return yield axios_1.default({
            url: url,
            method: 'PUT',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers": "Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age": "3600",
            },
            referrerPolicy: 'no-referrer',
            redirect: 'follow',
            credentials: 'same-origin',
            data: data
        });
    });
}
exports.callRestPut = callRestPut;
function callRestDelete(key, urlParams, data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (getConfigData('serviceType') === 'file') {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ data: "Ok", status: 200 });
                }, 2000);
            });
        }
        const url = getUrlParamList(key, urlParams);
        return yield axios_1.default({
            url: url,
            method: 'DELETE',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers": "Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age": "3600",
            },
            referrerPolicy: 'no-referrer',
            redirect: 'follow',
            credentials: 'same-origin',
            data: data
        });
    });
}
exports.callRestDelete = callRestDelete;
function callRestGet(key, urlParams) {
    return __awaiter(this, void 0, void 0, function* () {
        if (getConfigData('serviceType') === 'file') {
            return new Promise((resolve, reject) => {
                const foundData = jsonData[key];
                if (foundData)
                    resolve({ data: foundData, status: 200 });
                else
                    resolve({ data: "OK", status: 200 });
            });
        }
        const url = getUrlParamList(key, urlParams);
        // return fetch(url,{
        //     method:'GET',
        //     //mode: 'cors',
        //     headers: {
        //         'Accept': 'application/json',
        //         "Content-Type": "application/json",
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods":"DELETE,GET,POST,PUT,OPTIONS",
        //         "Access-Control-Allow-Headers":"Authorization,Content-Type,Pragma,Cache-Control",
        //         "Access-Control-Max-Age":"3600",
        //     }
        // })
        // .then(response=>response.json());
        return yield axios_1.default({
            url: url,
            method: 'GET',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE,GET,POST,PUT,OPTIONS",
                "Access-Control-Allow-Headers": "Authorization,Content-Type,Pragma,Cache-Control",
                "Access-Control-Max-Age": "3600",
            }
        });
    });
}
exports.callRestGet = callRestGet;
function addToList(data, newData) {
    let mdata;
    if (newData && newData.id) {
        let max = 0;
        data.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });
        mdata = [...data, Object.assign(Object.assign({}, newData), { id: max + 1, parentId: null })];
    }
    else {
        mdata = [...data, newData];
    }
    return mdata;
}
exports.addToList = addToList;
function updateList(data, oldData, newData) {
    let mdata = [...data];
    try {
        const foundedIndex = mdata.indexOf(oldData);
        if (foundedIndex !== undefined && foundedIndex >= 0) {
            mdata.splice(foundedIndex, 1, newData);
        }
        else {
            mdata = [];
        }
    }
    catch (err) {
        mdata = [];
    }
    return mdata;
}
exports.updateList = updateList;
function deleteFromList(data, oldData) {
    let dataDelete = [...data];
    try {
        // tableData , childRows
        if (!oldData.tableData.childRows) {
            const index = oldData.tableData.id;
            dataDelete.splice(index, 1);
        }
        else {
            dataDelete = [];
        }
    }
    catch (e) {
        dataDelete = [];
    }
    return dataDelete;
}
exports.deleteFromList = deleteFromList;
function hasSystemFeatures(feature) {
    const res = getConfigData('features').filter(item => {
        return item.title === feature;
    });
    return res.length > 0 && res[0].value;
}
exports.hasSystemFeatures = hasSystemFeatures;
// export function getBIUrl(type,path,user){
//     let url = '';
//     switch(type){
//         case 'REPORT_TRANSACTIONAL':
//             url += getConfigData('urlBIPublisher')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
//             break;
//         case 'REPORT_DASHBOARD':
//             url += getConfigData('urlBIAnalytics')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
//             break;
//         case 'REPORT_ANALYSER':
//             url += getConfigData('urlBIVisualAnalyser')+encodeURIComponent(path)+'&impersonate='+user+'&nqUser=biviewer&nqPassword=biviewer12c';
//             break;            
//     }
//     return url;
// }
function biLogin(key, path, impersonate, biuser, bipassword) {
    let url = '';
    switch (key) {
        case 'REPORT_TRANSACTIONAL':
            url += getConfigData('urlBIPublisher') + encodeURIComponent(path) + '&impersonate=' + impersonate + '&nqUser=' + biuser + '&nqPassword=' + bipassword;
            break;
        case 'REPORT_DASHBOARD':
            url += getConfigData('urlBIAnalytics') + encodeURIComponent(path) + `&impersonate=${impersonate}&nqUser=${biuser}&nqPassword=${bipassword}`;
            break;
        case 'REPORT_ANALYSER':
            url += getConfigData('urlBIVisualAnalyser') + encodeURIComponent(path) + `&impersonate=${impersonate}&nqUser=${biuser}&nqPassword=${bipassword}`;
            break;
        case 'urlBIVisualAnalyserCreate':
            url += getConfigData('urlBIVisualAnalyserCreate');
            break;
        default:
            break;
    }
    console.log('ebrahim', key, path, impersonate, biuser, bipassword, url);
    if (key !== 'REPORT_ANALYSER' && key !== 'urlBIVisualAnalyserCreate')
        return url;
    //let url = getConfigData('urlBIVisualAnalyser');
    //alert(0)
    var popup = window.open(url, "_blank", "width=" + screen.width + ", height=" + screen.height, true);
    popup.postMessage({ user: biuser, password: bipassword }, '*'); // childwin is the targetWindow
    popup.focus();
    // popup.onload= ()=> {
    //        console.log('this is a test for visual analyser-step 1');
    //     alert(1)
    //     loginForm = popup.document.getElementsByClassName('bitech-login-form')[0];
    //     loginForm.action = url + '&impersonate='+ impersonate;
    //     popup.document.getElementById('idUser').value = biuser;
    //     popup.document.getElementById('idPassword').value = bipasswd;
    //     loginForm.submit();
    // }
    //  popup.addEventListener('load', function () {
    //           console.log('this is a test for visual analyser-step 1');
    //           alert(1)
    //  loginForm = popup.document.getElementsByClassName('bitech-login-form')[0];
    //        loginForm.action = url + '&impersonate='+ impersonate;
    //        popup.document.getElementById('idUser').value = biuser;
    //        popup.document.getElementById('idPassword').value = bipasswd;
    //        loginForm.submit();
    //     });
}
exports.biLogin = biLogin;
function readFile(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = null;
        yield fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
            console.log("response", response);
            return response.json();
        })
            .then(data => {
            console.log(data);
            result = data;
        })
            .catch(err => {
            console.log("err", err);
        });
        return result;
    });
}
exports.readFile = readFile;
