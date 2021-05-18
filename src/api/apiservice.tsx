import {
  BASE_URL,
  GET,
  GET_ID_PARAMS,
  GET_URL_PARAMS,
  SHOW_LOADER,
  GET_URL_ENCODED,
  POST_RAW,
  POST_FORM,
  POST_URL_ENCODED,
  PATCH_FORM,
  PATCH_URL_ENCODED,
  DELETE,
  DELETE_URL_PARAMS,
  DELETE_URL_ENCODED,
  MULTI_PART_POST,
  MULTI_PART_PATCH,
} from '../utils/constants';

const performAPi = (apiEndPoint: string, params: any): any => {
  var arr = apiEndPoint.toString().split(' ');
  const apiType = arr[1];
  const apiName = arr[0];

  const objToQueryString = (obj: any) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(key + '=' + obj[key]);
    }
    return keyValuePairs.join('&');
  };

  const objToURLEncodedString = (obj: any) => {
    var formBody: any = [];
    for (var property in obj) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(obj[property]);
      if (obj[property].constructor === Array) {
        obj[property].forEach((obj: any) => {
          formBody.push(encodedKey + '=' + encodeURIComponent(obj));
        });
      } else formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    return formBody;
  };

  const objToFormData = (obj: any) => {
    const form = new FormData();
    for (const key in obj) {
      form.append(key, obj[key]);
    }
    return form;
  };
  const findSettings = (apiName: string, apiType: string, params: any): any => {
    var myHeaders = new Headers();
    var resourceURL: string = `${BASE_URL}${apiName}`;
    var settings: any = {
      redirect: 'follow',
      url: resourceURL,
      headers: myHeaders,
      method: '',
      body: null,
    };
    switch (apiType) {
      case GET:
        settings.method = 'GET';
        break;
      case GET_ID_PARAMS:
        settings.method = 'GET';
        settings.url = resourceURL + '/' + params;
        break;
      case GET_URL_PARAMS:
        settings.method = 'GET';
        settings.url = resourceURL + '?' + objToQueryString(params);
        break;
      case GET_URL_ENCODED:
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        settings.headers = myHeaders;
        settings.method = 'GET';
        settings.body = objToURLEncodedString(params);
        break;
      case POST_RAW:
        myHeaders.append('Content-Type', 'application/json');
        settings.headers = myHeaders;
        settings.method = 'POST';
        settings.body = JSON.stringify(params);
        break;
      case POST_FORM:
        settings.headers = myHeaders;
        settings.method = 'POST';
        settings.body = objToFormData(params);
        break;
      case POST_URL_ENCODED:
        myHeaders.append(
          'Content-Type',
          'application/x-www-form-urlencoded;charset=UTF-8',
        );
        myHeaders.append('Accept', 'application/json');
        settings.headers = myHeaders;
        settings.method = 'POST';
        settings.body = objToURLEncodedString(params);
        break;
      case PATCH_FORM:
        settings.headers = myHeaders;
        settings.method = 'PATCH';
        settings.body = objToFormData(params);
        break;
      case PATCH_URL_ENCODED:
        myHeaders.append(
          'Content-Type',
          'application/x-www-form-urlencoded;charset=UTF-8',
        );
        myHeaders.append('Accept', 'application/json');
        settings.headers = myHeaders;
        settings.method = 'PATCH';
        settings.body = objToURLEncodedString(params);
        break;
      case DELETE:
        settings.method = 'DELETE';
        settings.url = resourceURL + '/' + params;
        break;
      case DELETE_URL_PARAMS:
        settings.method = 'DELETE';
        settings.url = resourceURL + '?' + objToQueryString(params);
        break;
      case DELETE_URL_ENCODED:
        myHeaders.append(
          'Content-Type',
          'application/x-www-form-urlencoded;charset=UTF-8',
        );
        myHeaders.append('Accept', 'application/json');
        settings.headers = myHeaders;
        settings.method = 'DELETE';
        settings.body = objToURLEncodedString(params);
        break;
      case MULTI_PART_POST:
        // myHeaders.append('Content-Type', 'multipart/form-data');
        // myHeaders.append('Accept', '*/*');
        settings.headers = myHeaders;
        settings.method = 'POST';
        settings.body = params;
        break;
      case MULTI_PART_PATCH:
        // myHeaders.append('Content-Type', 'multipart/form-data');
        // myHeaders.append('Accept', '*/*');
        settings.headers = myHeaders;
        settings.method = 'PATCH';
        settings.body = params;
        break;
      default:
        settings.method = 'GET';
        break;
    }
    return settings;
  };

  const settings = findSettings(apiName, apiType, params);

  return fetch(settings.url, settings)
    .then(async (res: any) => {
      const resSize = res._bodyInit._data.size;
      if (resSize > 0) {
        const resTemp = await res.json();
        if (resTemp.constructor === Array) {
          const successRes = {
            code: res.status,
            message: res.message,
            arr: resTemp,
          };
          console.log('Response=> ', JSON.stringify(successRes));
          return successRes;
        } else {
          if (!resTemp.code) {
            resTemp.code = res.status;
          }
          if (!resTemp.message) {
            resTemp.message = res.message;
          }
          console.log('Response=> ', JSON.stringify(resTemp));
          return resTemp;
        }
      } else {
        const successRes = {code: res.status, message: res.message};
        console.log('Response=> ', JSON.stringify(successRes));
        return successRes;
      }
    })
    .catch(err => {
      console.log('Response Error=> ', JSON.stringify(err));
    });
};
export default performAPi;
