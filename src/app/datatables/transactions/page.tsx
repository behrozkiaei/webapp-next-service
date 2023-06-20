"use client"; // this is a client component 👈🏽
import Aside from "@/components/aside";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "@/components/meta-head";
import PageWrapper from "@/components/page-wrapper";
import TopFooter from "@/components/top-footer";
import TopMenu from "@/components/top-menu";
import { getAllOrders, getAllTransactions } from "@/repository/datatables";
import { Order, Transaction } from "@/utils/interfaces/datatables";
import { translateOrderType } from "@/utils/interfaces/order.interface";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { addCommas } from "@persian-tools/persian-tools";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
export default function OrderTable() {
  const [data, setData] = useState<Transaction[]>();
  const [page, setPage] = useState(0);
  const [take, setTake] = useState(10);
  const [count, setCount] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setLoading] = useState<boolean>(true);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setTake(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getData = async (from: number = 0, take: number = 10) => {
    const res = await getAllTransactions(from.toString(), take.toString());
    console.log(res);
    if (res.status && res.result) {
      console.log(res.result);
      setData(res.result.data as Transaction[]);
      setCount(res.result.length);
    }
  };
  useEffect(() => {
    const startFetch = async () => {
      setLoading(true);
      const res = await getData();
      setLoading(false);
    };
    startFetch();
  }, []);
  useEffect(() => {
    const startFetch = async (page: number, take: number) => {
      const res = await getData(page, take);
    };
    startFetch(page + 1, take);
  }, [page, take]);
  return (
    <>
      <Head
        title="نکست سون، خدمات یکپارچه خودرو، قبض و سیم کارت"
        description="نکست سون| خرید شارژ و ایترنت"
      />

      <title>{"نکست سون، لیست تراکنش های من "}</title>

      <div>
        <div className="--is-rtl theme--light">
          <div className="v-application--wrap">
            <div className="bg-color">
              <TopMenu></TopMenu>
              <div
                style={{
                  height: "80px",
                }}
              >
                <Header></Header>
                <Aside></Aside>
              </div>
              <PageWrapper
                title={`تراکنش ها من `}
                desc1={`
                  لیست تراکنش ها را اینجا ببینید
                `}
              >
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 650, direction: "rtl" }}
                    aria-label="simple table"
                  >
                    <TableHead sx={{ direction: "rtl" }}>
                      <TableRow>
                        <TableCell align="center">#</TableCell>
                        <TableCell align="right">نام سفارش</TableCell>
                        <TableCell align="right">مبلغ به ریال</TableCell>
                        <TableCell align="right">تاریخ سفارش</TableCell>
                        <TableCell align="right">وضعیت پرداخت</TableCell>
                        <TableCell align="right">جزییات</TableCell>
                      </TableRow>
                    </TableHead>

                    {!isLoading && data && data.length > 0 ? (
                      <TableBody>
                        {data.map((row, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row" align="right">
                              {page * take + index + 1}
                            </TableCell>
                            <TableCell component="th" scope="row" align="right">
                              {translateOrderType(row.order.type)}
                            </TableCell>
                            <TableCell align="right">
                              {addCommas(row.amount)}
                            </TableCell>
                            <TableCell align="right">{row.date}</TableCell>
                            <TableCell align="right">
                              {row.isPaid ? "پرداخت شده " : "پرداخت نشده"}
                            </TableCell>
                            <TableCell align="center">
                              <Link
                                scroll={false}
                                href={`/receipt?id=${row.order.id}`}
                              >
                                {" "}
                                مشاهده جزییات{" "}
                              </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    ) : isLoading ? (
                      <TableBody>
                        <TableRow>
                          <TableCell align="center">
                            <BeatLoader
                              color={"var(--primary)"}
                              loading={isLoading}
                              // cssOverride={override}
                              size={10}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    ) : (
                      <TableBody>
                        <TableRow>
                          <TableCell align="right">
                            {"هیچ رکوردی ثبت نشده است"}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    )}
                  </Table>
                </TableContainer>
                {data && !isLoading && data?.length > 0 && (
                  <TablePagination
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                  />
                )}
              </PageWrapper>
            </div>
            <div className="white">
              <TopFooter />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
