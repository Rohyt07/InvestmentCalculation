import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Result({input}){
    const resultData = calculateInvestmentResults(input);
    const initailInvestment = resultData[0].valueEndOfYear -resultData[0].interest -resultData[0].annualInvestment;
    console.log(resultData);
    return (
        <table id="result">
            <thead>
        <tr> 
        <th>Year</th>
        <th>Investment Value</th>
        <th>Intrest Year</th>
        <th>Total Intrest</th>
        <th>Invested Capital</th>
        </tr>
            </thead>
            <tbody>
        {resultData.map((yearData)=>{
          const totalIntrest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initailInvestment

          const totalInvestment = yearData.valueEndOfYear - yearData.interest
            return(
              <tr key={yearData.year}>
              <td> {yearData.year} </td>
              <td> {formatter.format(yearData.annualInvestment)} </td>
              <td> {formatter.format(yearData.interest)} </td>
              <td> {formatter.format(totalIntrest)}</td>
              <td> {formatter.format(totalInvestment)}</td>
                </tr>
            )
        })}
            </tbody>
        </table>
    )
 
}