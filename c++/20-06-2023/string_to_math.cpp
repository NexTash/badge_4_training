#include <iostream>
#include "exprtk/exprtk.hpp"

using namespace std;

int main() {
    while (1)
    {
        cout<<"Please give mathimatical equation to calculate result: ";
        string expression;
        cin>>expression;

        typedef exprtk::expression<double> expression_t;
        typedef exprtk::parser<double> parser_t;

        expression_t expression_obj;
        parser_t parser;

        if (!parser.compile(expression, expression_obj)) {
            cout << "Error: Compilation failed!" << endl;
            return 1;
        }

        double result = expression_obj.value();

        cout << "Result: " << result << endl;
        
        cout<<endl<<endl<<endl<<endl;
    }
    return 0;
}
