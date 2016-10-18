# Inputs and Outputs

The first question / assumption you should verify when thinking about an algorithm problem is to figure out what the inputs and outputs are.

Pay careful attention to the _type_ of the input and output (string, number, boolean etc...) - this will help determine what boilerplate code to write.

Also pay attention to which inputs are _required_ and which are _optional_, and for optional ones, what their default values might be.

This relates to Step #1 in Polya's method:

1. **Understand the problem**
1. Devise a plan
1. Carry out the plan
1. Look back

<table>
  <thead>
    <tr>
      <th> Step </th>
      <th> Building Apps </th>
      <th> Whiteboard Interviews </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Determine Inputs and Outputs</td>
      <td>
        Look to wireframes to see what data users enter / how the data will be used
        <br><br>
        Look at APIs / existing data sources in the app
        <br><br>
        Determine _how_ it's coming in (Web sockets?  ETL? HTTP?) and being served (via an API?  User-facing pages?)
      </td>
      <td>
        What parameters should the function take?
        <br><br>
        Write down sample inputs and outputs to the function you're writing.
      </td>
    </tr>
    <tr>
      <td>Ask "What if?" Questions</td>
      <td>
        If there's a user interface, you may deal with questions like "What if a user leaves a field blank?" and "What if a user double-clicks a button?"
        <br><br>
        For systems (think microservice architectures) you might ask "What if this API is down?" and "What if a client starts DOSing the system?"
      </td>
      <td>
        Look for basic questions about ranges / overflows.  For example "What if the start date is later than the end date?"
      </td>
    </tr>
  </tbody>
</table>
