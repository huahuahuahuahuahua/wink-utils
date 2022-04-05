/*
 * @Author: t_winkjqzhang
 * @Date: 2022-04-02 14:42:52
 * @LastEditTime: 2022-04-02 15:19:35
 * @Description: Do not edit
 */
import {UrlGetRequest} from "../src/index";
// import assert from "assert";

describe("UrlGetRequest", () => {
  describe("should return a UrlGetRequest number", () => {
    let url = "https://test.kugou.com/?tagid=101&origin=ktvapp";
    let params1 = "tagid";
    let urlret1 = "101";
    let params2 = "origin";
    let urlret2 = "ktvapp";
    let params3 = "";
    let urlret3 = false;
    test("params1:tagid,return urlret1:101", () => {
      expect(UrlGetRequest(url, params1)).toBe(urlret1);
    });
    test("params:origin,return urlret:ktvapp", () => {
      expect(UrlGetRequest(url, params2)).toBe(urlret2);
    });
    test("params3:,return urlret3:false", () => {
      expect(UrlGetRequest(url, params3)).toBe(urlret3);
    });
  });
});
