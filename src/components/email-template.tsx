import * as React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({}) => (
  <div>
    <h1>Test</h1>
  </div>
);
