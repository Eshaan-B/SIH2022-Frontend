import React from "react";
import { useState } from "react";

function Tracker() {
  const [formData, setFormData] = useState({
    govtBodyName: "",
    state: "",
    designation: "",
    proposalType: "",
    proposalDesc: "",
    priority: "",
    estimatedBudget: "",
    grantType: "",
    grantTypeDesc: "",
  });

  const {
    govtBodyName,
    state,
    designation,
    proposalType,
    proposalDesc,
    priority,
    estimatedBudget,
    grantType,
    grantTypeDesc,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.grantType === "other") {
      setFormData({ ...formData, grantType: grantTypeDesc });
    }
    console.log(formData);
  };

  return (
    <div>
      <h1>New Application</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Government Body Name"
          name="govtBodyName"
          value={govtBodyName}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={state}
          onChange={(e) => onChange(e)}
          required
        />
        <input
          type="text"
          placeholder="Designation"
          name="designation"
          value={designation}
          onChange={(e) => onChange(e)}
          required
        />
        <select
          name="proposalType"
          value={proposalType}
          onChange={(e) => onChange(e)}
        >
          <option value="none">Proposal Type</option>
          <option value="monetary">Monetary</option>
          <option value="non-monetary">Non-Monetary</option>
        </select>
        <textarea
          type="text"
          placeholder="Proposal Description"
          name="proposalDesc"
          value={proposalDesc}
          onChange={(e) => onChange(e)}
          required
        />
        <select name="priority" value={priority} onChange={(e) => onChange(e)}>
          <option value="none">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <input
          type="text"
          placeholder="Estimated Budget Request"
          name="estimatedBudget"
          value={estimatedBudget}
          onChange={(e) => onChange(e)}
          required
        />
        <select
          name="grantType"
          value={grantType}
          onChange={(e) => onChange(e)}
        >
          <option value="none">Grant Type</option>
          <option value="construction">Construction Grant</option>
          <option value="spaceAllocation">Space Allocation Grant</option>
          <option value="budgetApproval">Budget Approval</option>
          <option value="other">Other (mention)</option>
        </select>
        <input
          type="text"
          placeholder="Grant Type, enter NA if already selected"
          name="grantTypeDesc"
          value={grantTypeDesc}
          onChange={(e) => onChange(e)}
          required
        />
        <input type="submit" value="Create New Application" />
      </form>
    </div>
  );
}

export default Tracker;
