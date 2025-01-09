try
{
  const value = Number( process.env.INPUT_VALUE );
  if( value < 3 )
  {
    process.env.INPUT_VALUE = String( value + 1 );
    throw new Error( 'Wrong attempt' );
  }
  else
  {
    console.log( 'Success' );
  }
}
catch( error )
{
  throw error.message;
}
