import React from "react";
import { Pagination } from "antd";
// @ts-ignore
import styles from "./index.scss";

interface Params {
  /**
   * 分页参数
   * */
  searchParams: any;
  /**
   * 配置参数
   * */
  params: any;
  /**
   * 回调事件
   * */
  handlersearchData: (pageInfo:{pageSize?: number, currentPage?: number, totalRecords?: number}, params: any) => void;
  /**
   * 分页数据
   * */
  pageInfo: {
    pageSize?: number;
    currentPage?: number;
    totalRecords?: number;
  };
  /**
   * 指定每页可以显示多少条
   * */
  pageSizeOptions: Array<string>;
  /**
   * 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
   * */
  showSizeChanger: boolean | undefined;

}


const CirclePageRule: React.FC<Partial<Params>> = (
  {
    pageInfo,
    searchParams,
    params,
    handlersearchData,
    showSizeChanger,
    pageSizeOptions = [ '20', '50', '100' ]
  }: Partial<Params>) => {

  // 分页数据
  const pageSizeData = {
    defaultPageSize: pageInfo?.pageSize,
    pageSize: pageInfo?.pageSize,
    current: pageInfo?.currentPage,
    total: pageInfo?.totalRecords,
  };

  // 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
  const onChange = (page: number, pageSize?: number) => {
    handlersearchData?.({
      pageSize,
      currentPage: page,
      ...searchParams
    }, params)
  }


  return (<div className={styles.pageFooterCircle}>
    <Pagination
      {...pageSizeData}
      showSizeChanger={showSizeChanger}
      pageSizeOptions={pageSizeOptions}
      onChange={onChange}
      onShowSizeChange={onChange}
    />
  </div>);
};

export default CirclePageRule;
