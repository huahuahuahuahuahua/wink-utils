/**
 * @param {string} url //完整的url
 * @param {string} variable //param参数，键
 * @returns {string} //param参数，variable对应的值
 * @Date: 2022-04-02 15:03:38
 * @Description:url分离出参数
 */
declare function UrlGetRequest(url: string, variable: string): string | false;
export default UrlGetRequest;
