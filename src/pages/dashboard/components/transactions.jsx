import React, { useEffect, useState } from "react";
import moment from "moment";

const Transactions = ({ transactions }) => {
  const [transactionsBeforeCurrentDate, setTransactionsBeforeCurrentDate] =
    useState([]);

  useEffect(() => {
    const currentDate = moment();

    // Filter transactions before the current date
    const filteredTransactions = transactions?.filter((transaction) =>
      moment(transaction.date).isBefore(currentDate, "day")
    );

    // Sort transactions by date in descending order
    filteredTransactions?.sort((a, b) => moment(b.date).diff(moment(a.date)));

    // Get the last five transactions
    const lastFive = filteredTransactions?.slice(0, 5);

    // Update the state
    setTransactionsBeforeCurrentDate(lastFive);
  }, [transactions]);

  console.log("transactionsBeforeCurrentDate", transactionsBeforeCurrentDate);

  return (
    <>
      <div className="p-6 h-96 overflow-hidden">
        <h2 className="text-xl font-semibold mb-4">Last Five Transactions</h2>
        <ul className="space-y-2 overflow-y-auto h-full">
          {transactionsBeforeCurrentDate?.map((transaction, index) => (
            <li
              key={index}
              className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
            >
              <div>
                <div className="text-lg font-medium text-gray-700">
                  {moment(transaction.date).format("DD MMM")}
                </div>
                <div className="text-sm text-gray-500">
                  {transaction.description}
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`text-lg font-semibold ${
                    transaction.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {`${transaction.type === "income" ? "+" : "-"}`}
                  {transaction.amount}
                </div>
                <div className="text-sm text-gray-400 capitalize">
                  {transaction.type}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
