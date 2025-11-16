import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useEffect } from 'react';
import { addComment, getComments } from '../actions/commentActions';
import { useCommentsStore } from '@/lib/store';
import CommentItem from './CommentItem';

const formSchema = z.object({
  comment: z.string().min(1, 'Comment cannot be empty'),
});

interface CommentsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  slideId: string;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ open, onOpenChange, slideId }) => {
  const { comments, setComments } = useCommentsStore();

  const fetchComments = () => {
    getComments(slideId).then(setComments);
  };

  useEffect(() => {
    if (open) {
      fetchComments();
    }
  }, [open, slideId, setComments]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: '',
    },
  });

  const { replyingTo, setReplyingTo } = useCommentsStore();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append('comment', values.comment);
    formData.append('slideId', slideId);
    if (replyingTo) {
      formData.append('parentId', replyingTo);
    }

    const result = await addComment(formData);
    if (result.success) {
      form.reset();
      setReplyingTo(null);
      fetchComments(); // Refresh comments list
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Comments</SheetTitle>
        </SheetHeader>
        <div className="py-4 space-y-4">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Add a comment..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Post</Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default CommentsModal;
