import React, { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import SingleQuote from "./SingleQuote";
import "./paginationStyles/pagination.css";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const url = "./data/quotes.json";

const Quotes = ({ quotesPerPage }) => {
  const [quoteOffset, setQuoteOffset] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const quotes = await response.json();
      setQuotes(quotes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const endOffset = quoteOffset + quotesPerPage;
  const currentQuotes = quotes.slice(quoteOffset, endOffset);
  const pageCount = Math.ceil(quotes.length / quotesPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * quotesPerPage) % quotes.length;
    setQuoteOffset(newOffset);
  };
  return (
    <div className="min-h-screen  bg-slate-900 text-slate-200 p-6 pb-0">
      <div className="pb-20 relative">
        <SingleQuote
          quotes={currentQuotes}
          loading={loading}
          pageCount={pageCount}
          quoteOffset={quoteOffset}
          endOffset={endOffset}
        />

        <p className="text-center mt-3 text-slate-400">
          {" "}
          Showing {quoteOffset + 1} to {endOffset} of {quotes.length} quotes{" "}
        </p>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          {!loading && (
            <ReactPaginate
              breakLabel="..."
              nextLabel={<FiChevronsRight />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel={<FiChevronsLeft />}
              renderOnZeroPageCount={null}
              containerClassName="wb-pagination"
              pageClassName="pagination-item"
              pageLinkClassName="pagination-link"
              activeClassName="pagination-link-active"
              previousLinkClassName="prev"
              nextLinkClassName="next"
              disabledClassName="disabled"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
