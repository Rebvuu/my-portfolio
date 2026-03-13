import { useForm, ValidationError } from '@formspree/react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea'
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { toast } from "sonner"
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyknjllj");
  if (state.succeeded) {
      return toast.success("Successfully sent!");
  }

  return (
    <Card className='border-muted/80 bg-white/80 shadow-sm backdrop-blur'>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="email">
                Email Address<span className="text-destructive">*</span>
              </FieldLabel>
              <Input
                id="email"
                type="email" 
                name="email"
                placeholder="example@email.com"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </Field>
            <Field>
              <FieldLabel>Message<span className="text-destructive">*</span></FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </Field>
            <Field orientation="horizontal">
              <Button 
                size="sm"
                className="shadow-md shadow-primary/30 transition duration-300 hover:translate-x-0.5 hover:shadow-md cursor-pointer"
                type="submit"
                disabled={state.submitting}>
                Submit
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}