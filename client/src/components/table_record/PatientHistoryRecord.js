import React from "react";

const PatientHistoryRecord = ({ data }) => {
  return (
    <>
      {data.map((history) => (
        <div className="card ml-5 my-4" style={{ borderRadius: "30px" }}>
          <div className="row no-gutters">
            <div className="col-md-3 py-5">
              <h5>
                {"Date:" +
                  new Date(history.prescriptionHistory.createdAt)
                    .toISOString()
                    .split("T")[0]}
              </h5>
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">
                  {"Disease name:" + history.diseaseName}
                </h5>
                <p className="card-text">
                  {"Disease description: " + history.description}
                </p>
                <p className="card-text">
                  {"Investigation: " +
                    history.prescriptionHistory.investigationResult}
                </p>
                <p className="card-text">
                  {"Treatment Taken: " + history.prescriptionHistory.treatment}
                </p>
                <p className="card-text">
                  {"Medicine name: " + history.medicineName}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
    // <Table responsive hover>

    //       <>
    //         <tr>
    //           <td>{"NO:" + id++}</td>
    //           <tr>
    //             <td>{"Disease Name:" + history.diseaseName} </td>
    //           </tr>
    //         </tr>
    //       </>
    //       // //{/* <tr>
    //       //   <td>{id++} </td>

    //       //   <td>{history.medicineName} </td>
    //       //   <td>{history.dosage} </td>
    //       //   <td>{history.description} </td> */}
    //     ))}
    // </Table>
  );
};
export { PatientHistoryRecord };
