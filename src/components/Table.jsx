import React from "react";
import PropTypes from "prop-types";

const Table = ({ data, onDelete }) => {
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    }

    const dataKeys =
        data.length > 0
            ? Object.keys(data[0]).filter((key) => key !== "password")
            : [];

    const handleDelete = (id) => {
        if (window.confirm("Delete id: " + id + "?")) {
            onDelete(id);
        }
    };

    return (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr style={{ borderBottom: "1px solid #000" }}>
                    {dataKeys.map((key) => (
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index} style={{ borderBottom: "1px solid #000" }}>
                        {dataKeys.map((key) => (
                            <td key={key}>
                                {key === "createdAt" || key === "updatedAt" ? (
                                    formatDate(item[key])
                                ) : key === "image" &&
                                  item[key] !== "" &&
                                  item[key] !== null ? (
                                    <a
                                        href={item[key]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download
                                    </a>
                                ) : typeof item[key] === "boolean" ? (
                                    item[key].toString()
                                ) : (
                                    item[key]
                                )}
                            </td>
                        ))}
                        <td>
                            <button
                                onClick={() => handleDelete(item.id)}
                                style={{ color: "red" }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func,
};

export default Table;
